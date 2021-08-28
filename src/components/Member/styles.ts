import styled, { css } from "styled-components/native";

interface IsStatusProps {
  isOnline: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.View``;

export const TitleContainer = styled.View``;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: 18px;
  color: ${(props) => props.theme.colors.heading};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;

`;
export const IsStatus = styled.View<IsStatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${props => props.isOnline ? props.theme.colors.on : props.theme.colors.primary};
  margin-right: 8px;
`;

export const Status = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: 14px;
  color: ${(props) => props.theme.colors.highlight};
`;
