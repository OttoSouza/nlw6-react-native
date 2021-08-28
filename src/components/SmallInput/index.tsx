import React from "react";

import { Container } from "./styles";
import { TextInputProps, TextInput } from 'react-native';

const SmallInput: React.FC<TextInputProps> = ({...rest}) => {
  return <Container keyboardType="number-pad" {...rest}/>;
};

export default SmallInput;
