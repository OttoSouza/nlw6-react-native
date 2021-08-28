import React from "react";
import { useTheme } from "styled-components/native";
import { IBackground } from "../../interface/IBackground";
import { Container } from "./styles";

export const Background: React.FC<IBackground> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <Container colors={[colors.secondary80, colors.secondary100]}>
      {children}
    </Container>
  );
};


