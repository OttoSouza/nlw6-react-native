import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface ContentProps {
  checked: boolean;
}

interface WrapperProps {
  checked: boolean;
}

export const Container = styled(RectButton)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled.View<ContentProps>`
  width: 100px;
  height: 116px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  ${(props) =>
    props.checked
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.5;
        `}
`;

export const Wrapper = styled.View<WrapperProps>`
  ${(props) =>
    props.checked
      ? css`
          width: 12px;
          height: 12px;
          background-color: ${(props) => props.theme.colors.primary};
          border-radius: 4px;
          position: absolute;
          top: 8px;
          right: 8px;
        `
      : css`
          width: 10px;
          height: 10px;
          background-color: ${(props) => props.theme.colors.secondary100};
          border-color: ${(props) => props.theme.colors.secondary50};
          border-width: 2px;
          border-radius: 4px;
          position: absolute;
          top: 8px;
          right: 8px;
        `}
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  color: ${(props) => props.theme.colors.heading};
  font-size: 16px;
`;
