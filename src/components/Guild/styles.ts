import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: 18px;
  color: ${(props) => props.theme.colors.heading};
  margin-bottom: 4px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 16px;
`;

export const Wrapper = styled.View``;
export const Type = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: 12px;
  color: ${(props) => props.theme.colors.highlight};
  margin-bottom: 12px;
`;
