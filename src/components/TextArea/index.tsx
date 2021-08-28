import React from "react";

import { Container } from "./styles";
import { TextInputProps, TextInput } from 'react-native';

const TextArea: React.FC<TextInputProps> = ({...rest}) => {
  return <Container {...rest}/>;
};

export default TextArea;
