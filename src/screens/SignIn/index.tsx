import React from "react";
import IllustrationImg from "../../assets/illustration.png";
import { Container, Image, Content, Title, SubTitle } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon/index";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background/index";
import { useAuth } from "../../hooks/auth";
import { ActivityIndicator, Alert } from "react-native";

export const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
    // navigation.dispatch(
    //   CommonActions.navigate({
    //     name: "Home",
    //   })
    // );
  }

  return (
    <Background>
      <Container>
        <Image source={IllustrationImg} resizeMode="stretch" />
        <Content>
          <Title>
            Organize{`\n`}suas jogatinas{`\n`}facilmente
          </Title>
          <SubTitle>
            Crie grupos para jogar seus games {`\n`}com seus amigos
          </SubTitle>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <ButtonIcon text="Entrar com Discord" onPress={handleSignIn} />
          )}
        </Content>
      </Container>
    </Background>
  );
};
