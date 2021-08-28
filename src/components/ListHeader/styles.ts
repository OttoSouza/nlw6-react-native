import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

`;
export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};
  font-size: 16px;

`;
export const SubTitle = styled.Text`
  font-family: ${props => props.theme.fonts.text400};
  color: ${props => props.theme.colors.highlight};
  font-size: 12px;
`;
