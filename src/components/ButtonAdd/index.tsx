import React from "react";

import { Button } from "./styles";
import { IButton } from "../../interface/IButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from 'styled-components/native';

export const ButtonAdd: React.FC<IButton> = ({ ...rest }) => {
  const {colors} = useTheme()
  return (
    <Button {...rest}>
      <MaterialCommunityIcons name="plus" color={colors.heading} size={24}/>
    </Button>
  );
};
