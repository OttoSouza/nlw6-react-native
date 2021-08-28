import React from "react";
import { ReactNode } from "react";

import { Container, BackButton, Title, ActionContainer } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
interface HeaderProps {
  title: string;
  action?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, action }) => {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack()
  }

  const { colors } = useTheme();
  return (
    <LinearGradient colors={[colors.secondary100, colors.secondary40]}>
      <Container>
        <BackButton onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color={colors.heading} />
        </BackButton>
        <Title>{title}</Title>
        {action ? <ActionContainer>{action}</ActionContainer> : <View style={{width: 24}}/>}
      </Container>
    </LinearGradient>
  );
};

export default Header;
