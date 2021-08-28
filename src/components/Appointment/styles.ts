import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Button = styled(RectButton)`
  margin-top: 20px;
  margin-left: 24px;
`;
export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;

`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 24px;
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: 18px;
`;
export const CategoryTitle = styled.Text`
  color: ${(props) => props.theme.colors.highlight};
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: 12px;
  margin-right: 24px;
`;
export const PlayerInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const PlayerTitle = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: 12px;
  margin-left: 8px;
  margin-right: 24px;
`;
export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const DateInfoTitle = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: 12px;
  margin-left: 8px;
`;
