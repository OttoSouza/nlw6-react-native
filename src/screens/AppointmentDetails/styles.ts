import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 232px;
  margin-bottom: 32px;
`;

export const InformationContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 24px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: 28px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: 14px;
  color: ${(props) => props.theme.colors.heading};
  line-height: 21px;
`;

export const ButtonContainer = styled.View`
  padding: 0 24px;
  margin-bottom: ${getBottomSpace() + 34}px;
`;
