import styled from "styled-components/native";
import { Modal } from "react-native";

export const OverLay = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.overlay};
`;
export const Content = styled.View`
  flex: 1;
  margin-top: 100px;
`;
export const Bar = styled.View`
  width: 40px;
  height: 2px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.secondary30};
  align-self: center;
  margin-top: 12px;
`;
