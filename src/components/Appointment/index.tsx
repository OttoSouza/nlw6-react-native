import React from "react";
import {
  Button,
  Container,
  Content,
  Header,
  Title,
  CategoryTitle,
  PlayerInfoContainer,
  PlayerTitle,
  Footer,
  DateInfo,
  DateInfoTitle,
} from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
import GuildIcon from "../GuildIcon";
import { categories } from "../../util/categories";
import PlayerInfoSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { useTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

type IGuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export interface IAppointmentProps {
  id: string;
  guild: IGuildProps;
  category: string;
  date: string;
  description: string;
}

interface IProps extends RectButtonProps {
  data: IAppointmentProps;
}

const Appointment: React.FC<IProps> = ({ data, ...rest }) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { colors } = useTheme();
  return (
    <Button {...rest}>
      <Container>
        <LinearGradient
          colors={[colors.secondary50, colors.secondary70]}
          style={{
            height: 68,
            width: 64,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
        </LinearGradient>

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <CategoryTitle>{category.title}</CategoryTitle>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />
              <DateInfoTitle>{data.date}</DateInfoTitle>
            </DateInfo>

            <PlayerInfoContainer>
              <PlayerInfoSvg
                fill={data.guild.owner ? colors.primary : colors.on}
              />

              <PlayerTitle
                style={{ color: data.guild.owner ? colors.primary : colors.on }}
              >
                {data.guild.owner ? "Anfitriao" : "Visitante"}
              </PlayerTitle>
            </PlayerInfoContainer>
          </Footer>
        </Content>
      </Container>
    </Button>
  );
};

export default Appointment;
