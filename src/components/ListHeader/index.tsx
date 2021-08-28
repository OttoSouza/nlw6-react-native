import React from "react";

import { Container, Title, SubTitle } from "./styles";

interface IListHeader {
  title: string;
  subTitle: string;
}

export const ListHeader: React.FC<IListHeader> = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};
