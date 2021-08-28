import React, { useEffect, useState } from "react";

import {
  Container,
  ImageBackground,
  InformationContainer,
  Title,
  Subtitle,
  ButtonContainer,
} from "./styles";
import { Background } from "../../components/Background/index";
import Header from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import BannerImg from "../../assets/banner.png";
import { ListHeader } from "../../components/ListHeader/index";
import { Alert, FlatList, Share, Platform } from "react-native";
import { Member, MemberProps } from "../../components/Member";
import { Divider } from "../../components/Divider/index";
import { ButtonIcon } from "../../components/ButtonIcon/index";
import { useRoute } from "@react-navigation/native";
import { IAppointmentProps } from "../../components/Appointment/index";
import { api } from "../../services/api";
import Load from "../../components/Load";
import * as Linking from "expo-linking";
interface Params {
  guildSelected: IAppointmentProps;
}

interface GuildWidget {
  id: string;
  name: string;
  instant_invate: string;
  members: MemberProps[];
}

const AppointmentDetails: React.FC = () => {
  const route = useRoute();
  const { guildSelected } = route.params as Params;
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const { colors } = useTheme();
  const [loading, setLoading] = useState(true);

  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
    } catch (error) {
      Alert.alert("Verifique as conf do servidor!");
    } finally {
      setLoading(false);
    }
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invate);
  }

  function handleShareInvatation() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invate;

    Share.share({
      message,
      url: widget.instant_invate,
    });
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvatation}>
              <Fontisto name="share" size={24} color={colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <Container>
        <ImageBackground source={BannerImg}>
          <InformationContainer>
            <Title>{guildSelected.guild.name}</Title>
            <Subtitle>{guildSelected.description}</Subtitle>
          </InformationContainer>
        </ImageBackground>
        {loading ? (
          <Load />
        ) : (
          <>
            <ListHeader
              title="Jogadores"
              subTitle={`Total ${widget.members.length}`}
            />

            <FlatList
              data={widget.members}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Member data={item} />}
              ItemSeparatorComponent={() => (
                <Divider screen="AppointmentDetails" />
              )}
              style={{
                marginLeft: 24,

                marginBottom: 24,
              }}
            />
          </>
        )}

        {guildSelected.guild.owner && (
          <ButtonContainer>
            <ButtonIcon text="Entrar na partida" onPress={handleOpenGuild} />
          </ButtonContainer>
        )}
      </Container>
    </Background>
  );
};

export default AppointmentDetails;
