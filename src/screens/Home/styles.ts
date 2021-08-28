import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const Container = styled.View`
  padding: 0 24px;
`;
export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: center;
  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;
`;

export const CategoryContainer = styled.View `
  
`

export const Main = styled.View ``
export const CustomFlatList = styled.FlatList ``