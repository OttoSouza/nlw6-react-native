import React from "react";
import { View, TouchableOpacityProps } from "react-native";

import { Container, Title, Content, Wrapper, Type } from "./styles";
import GuildIcon from "../GuildIcon/index";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
export interface GuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface Props extends TouchableOpacityProps {
  data: GuildProps;
}

const Guild: React.FC<Props> = ({ data, ...rest }) => {
  const { colors } = useTheme();

  return (
    <Container {...rest} activeOpacity={0.7}>
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <Content>
        <Wrapper>
          <Title>{data.name}</Title>
          <Type>{data.owner ? "Administrador" : "Convidado"}</Type>
        </Wrapper>
      </Content>
      <Feather name="chevron-right" size={24} color={colors.heading} />
    </Container>
  );
};

export default Guild;
