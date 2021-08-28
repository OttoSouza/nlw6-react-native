import React from "react";
import { useAuth } from "../../hooks/auth";
import Avatar from "../Avatar";
import {
  Container,
  Content,
  UserContainer,
  GreetingText,
  Username,
  Message,
} from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Alert } from "react-native";

export const Profile: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignout() {
    Alert.alert("Logout", "Deseja sair do gameplay?", [
      { text: "Nao", style: "cancel" },
      { text: "Sim", onPress: () => signOut() },
    ]);
  }
  return (
    <Container>
      <RectButton onPress={handleSignout}>
        <Avatar imgUrl={user.avatar} />
      </RectButton>
      <Content>
        <UserContainer>
          <GreetingText>Olá, </GreetingText>

          <Username>{user.firstName}</Username>
        </UserContainer>

        <Message>Hoje é dia de vitória</Message>
      </Content>
    </Container>
  );
};
