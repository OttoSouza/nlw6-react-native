import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Button = styled(RectButton)`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
`;
