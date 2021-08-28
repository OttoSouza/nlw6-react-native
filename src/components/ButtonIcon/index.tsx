import React from "react";
import DiscordImage from "../../assets/discord.png";
import { Button, ImageContainer, Image, Text } from "./styles";
import { IButton } from "../../interface/IButton";
export const ButtonIcon: React.FC<IButton> = ({ text, ...rest }) => {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Image source={DiscordImage} />
      </ImageContainer>
      <Text>{text}</Text>
    </Button>
  );
};
