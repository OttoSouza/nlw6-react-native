import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

interface DiverderProps {
  screen: string;
}

export const Divider: React.FC<DiverderProps> = ({screen}) => {
  return <Container screen={screen}/>;
}
