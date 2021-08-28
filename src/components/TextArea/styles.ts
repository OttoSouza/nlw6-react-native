import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 100%;
  height: 95px;
  background-color: ${props => props.theme.colors.secondary40};
  color: ${props => props.theme.colors.heading};
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.text400};
  font-size: 12px;
  padding: 0 16px;
  padding-top: 16px;
`;
