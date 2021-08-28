import styled from "styled-components/native";
import { css } from "styled-components/native";

interface ContainerProps {
  screen: string;
}
export const Container = styled.View<ContainerProps>`
  ${(props) =>
    props.screen === "Home" &&
    css`
      width: 71%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.secondary40};
      margin: 0 8px;
      margin-top: -12px;
      align-self: flex-end;
    `}

  ${(props) =>
    props.screen === "AppointmentDetails" &&
    css`
      width: 79%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.secondary40};
      margin: 0 8px;
      margin-top: 2px;
      margin-bottom: 32px;
      align-self: flex-end;
    `}
    ${(props) =>
    props.screen === "Guilds" &&
    css`
      width: 73%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.secondary40};
      margin: 0 8px;
      margin-top: 2px;
      margin-bottom: 32px;
      align-self: flex-end;
    `}  
`;
