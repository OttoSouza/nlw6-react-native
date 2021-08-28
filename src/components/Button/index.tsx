import React from "react";
import { Button, Text } from "./styles";
import { IButton } from "../../interface/IButton";
export const ButtonCustom: React.FC<IButton> = ({ text, ...rest }) => {
  return (
    <Button {...rest}>
      <Text>{text}</Text>
    </Button>
  );
};
