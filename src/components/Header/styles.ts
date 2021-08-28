import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  width: 100%;
  height: 104px;
  margin-top: ${getStatusBarHeight()};
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: 20px;
  color: ${(props) => props.theme.colors.heading};
`;

export const ActionContainer = styled.View``;
