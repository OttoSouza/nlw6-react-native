import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import theme from "./src/global/theme";

LogBox.ignoreLogs(["You are not currently signed in to Expo on your development machine."])
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import Routes from "./src/routes";
import AuthProvider from "./src/hooks/auth";
import { LogBox } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  // enquanto as fonts nao carregarem...
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
