import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import * as AuthSession from "expo-auth-session";

import { api } from "../services/api";
import AsyncSotage from "@react-native-async-storage/async-storage";
import { COLLECTION_USER } from "../config/storage";
import { useEffect } from "react";
const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

interface User {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextProps {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success" && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get("/users/@me");

        const firstName = userInfo.data.username.split(" ")[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token,
        };

        await AsyncSotage.setItem(COLLECTION_USER, JSON.stringify(userData));

        setUser(userData);
      }
    } catch {
      throw new Error("N??o foi poss??vel autenticar");
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    setUser({} as User)
    await AsyncSotage.removeItem(COLLECTION_USER);
  }

  async function loadUserData() {
    const storage = await AsyncSotage.getItem(COLLECTION_USER);
    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthProvider;
