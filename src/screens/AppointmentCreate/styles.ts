import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const Title = styled.Text`
  margin-left: 24px;
  margin-top: 36px;
  margin-bottom: 18px;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.title700};
  color: ${(props) => props.theme.colors.heading};
`;

export const Form = styled.View`
  padding: 24px;
  margin-top: 32px;
`;

export const SelectButton = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  height: 68px;
  border-color: ${(props) => props.theme.colors.secondary50};
  border-radius: 8px;
  border-width: 1px;
  padding-right: 25px;
  align-items: center;
  overflow: hidden;
`;

export const SelectContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectImage = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${(props) => props.theme.colors.secondary50};
  border-radius: 8px;
`;

export const SelectContent = styled.View``;

export const SelectTitle = styled.Text`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.title700};
  color: ${(props) => props.theme.colors.heading};
`;

export const FieldsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;
export const FieldsContent = styled.View`

`;
export const FieldsTitle = styled.Text`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.title700};
  color: ${(props) => props.theme.colors.heading};
  margin-bottom: 12px;
`;

export const FieldsColumn = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts.text500};
  color: ${(props) => props.theme.colors.highlight};
`;

export const FieldsSubtitle = styled.Text`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.text400};
  color: ${(props) => props.theme.colors.highlight};
`;


export const ButtonContainer = styled.View `
  padding: 0 24px;
  margin-bottom: 56px;

`