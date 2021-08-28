import React from "react";
import {
  Container,
  Wrapper,
  TitleContainer,
  Title,
  StatusContainer,
  IsStatus,
  Status,
} from "./styles";
import Avatar from "../Avatar/index";

export interface MemberProps {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface Props {
  data: MemberProps;
}

export const Member: React.FC<Props> = ({ data }) => {
  const isOnline = data.status === "online";
  return (
    <Container>
      <Avatar imgUrl={data.avatar_url} />
      <Wrapper>
        <TitleContainer>
          <Title>{data.username}</Title>
        </TitleContainer>

        <StatusContainer>
          <IsStatus isOnline={isOnline}/>


          <Status>{isOnline ? "Disponivel" : "Ocupado"}</Status>
        </StatusContainer>
      </Wrapper>
    </Container>
  );
};
