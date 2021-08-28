import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 48px;
  height: 48px;
  background-color: ${props => props.theme.colors.secondary40};
  color: ${props => props.theme.colors.heading};
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.text400};
  font-size: 12px;
  margin-right: 4px;
  text-align: center;

`;
