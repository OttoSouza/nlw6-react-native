import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "./styles";
import { useTheme } from "styled-components/native";

interface AvatarProps {
  imgUrl: string;
}
//"https://avatars.githubusercontent.com/u/57202496?v=4"
const Avatar: React.FC<AvatarProps> = ({imgUrl}) => {
  const { colors } = useTheme();
  return (
    <LinearGradient
      colors={[colors.secondary50, colors.secondary70]}
      style={{
        width: 50,
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 24
      }}
    >
      <Image source={{uri: imgUrl}}/>
    </LinearGradient>
  );
};

export default Avatar;
