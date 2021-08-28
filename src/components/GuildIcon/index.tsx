import React from "react";
import { View } from "react-native";

import { Image } from "./styles";
import DicordSvg from "../../assets/discord.svg";
import { useTheme } from "styled-components/native";
interface GuildIconProps {
  guildId: string;
  iconId: string | null;
}

const { CDN_IMAGE } = process.env;

const GuildIcon: React.FC<GuildIconProps> = ({ guildId, iconId }) => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  const { colors } = useTheme();
  //();
  return (
    <View
      style={{
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: colors.discord,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {iconId ? (
        <Image source={{ uri }} resizeMode="cover" />
      ) : (
        <DicordSvg width={40} height={40} />
      )}
    </View>
  );
};

export default GuildIcon;
