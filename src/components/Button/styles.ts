import styled from "styled-components/native";
import {RectButton} from "react-native-gesture-handler";

export const Button = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text500};
`;
