import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: -40px;
  padding: 0 50px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${props => props.theme.fonts.title700};
  line-height: 40px;
`;
export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  text-align: center;
  font-size: 16px;
  margin-bottom: 64px;
  font-family: ${props => props.theme.fonts.title500};
  line-height: 25px;


`;
