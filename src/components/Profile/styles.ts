import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View``;
export const UserContainer = styled.View`
  flex-direction: row;
`;
export const GreetingText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title500};
  font-size: 24px;
  color: ${(props) => props.theme.colors.heading};
  margin-right: 6px;
`;
export const Username = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: 24px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Message = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  color: ${(props) => props.theme.colors.highlight};
`;
