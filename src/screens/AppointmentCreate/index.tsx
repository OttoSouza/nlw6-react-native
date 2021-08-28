import React, { useState } from "react";

import {
  Container,
  Title,
  Form,
  SelectButton,
  SelectContainer,
  SelectImage,
  SelectContent,
  SelectTitle,
  FieldsContainer,
  FieldsContent,
  FieldsTitle,
  FieldsColumn,
  Divider,
  FieldsSubtitle,
  ButtonContainer,
} from "./styles";
import { Background } from "../../components/Background/index";
import Header from "../../components/Header";
import { useTheme } from "styled-components/native";
import { CategorySelect } from "../../components/CategorySelect/index";
import { Feather } from "@expo/vector-icons";
import SmallInput from "../../components/SmallInput/index";
import TextArea from "../../components/TextArea/index";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { ButtonCustom } from "../../components/Button/index";
import ModalView from "../../components/Modal";
import Guilds from "../Guilds";
import { GuildProps } from "../../components/Guild";
import GuildIcon from "../../components/GuildIcon/index";
import uuid from "react-native-uuid";
import AsyncSotage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../config/storage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
const AppointmentCreate: React.FC = () => {
  const { colors } = useTheme();
  const [category, setCategory] = useState("");
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [openGuildModal, setOpenGuildModal] = useState(false);

  const {navigate}: NavigationProp<any> = useNavigation();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  function handleOpenGuild() {
    setOpenGuildModal(true);
  }

  function handleCloseModal() {
    setOpenGuildModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    const newAppoinemnt = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} as ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncSotage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncSotage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppoinemnt])
    );

    navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />
          <Container>
            <Title>Categoria</Title>

            <CategorySelect
              hasCheckBox
              setCategory={handleCategorySelect}
              categorySelected={category}
            />

            <Form>
              <SelectButton onPress={handleOpenGuild}>
                <SelectContainer>
                  {guild.icon ? (
                    <GuildIcon guildId={guild.id} iconId={guild.icon} />
                  ) : (
                    <SelectImage />
                  )}

                  <SelectContent>
                    <SelectTitle>
                      {guild.name ? guild.name : "Selecione um servidor"}
                    </SelectTitle>
                  </SelectContent>
                  <Feather
                    name="chevron-right"
                    size={24}
                    color={colors.heading}
                  />
                </SelectContainer>
              </SelectButton>

              <FieldsContainer>
                <FieldsContent>
                  <FieldsTitle>Dia e mes</FieldsTitle>

                  <FieldsColumn>
                    <SmallInput maxLength={2} onChangeText={setDay} />
                    <Divider>/</Divider>
                    <SmallInput maxLength={2} onChangeText={setMonth} />
                  </FieldsColumn>
                </FieldsContent>
                <FieldsContent>
                  <FieldsTitle>Hora e minuto</FieldsTitle>

                  <FieldsColumn>
                    <SmallInput maxLength={2} onChangeText={setHour} />
                    <Divider>:</Divider>
                    <SmallInput maxLength={2} onChangeText={setMinute} />
                  </FieldsColumn>
                </FieldsContent>
              </FieldsContainer>

              <FieldsContent
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FieldsTitle style={{ marginVertical: 12 }}>
                  Descricao
                </FieldsTitle>
                <FieldsSubtitle>Max 100 caracteres</FieldsSubtitle>
              </FieldsContent>
              <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
                onChangeText={setDescription}
              />
            </Form>

            <ButtonContainer >
              <ButtonCustom text="Agendar" onPress={handleSave}/>
            </ButtonContainer>
          </Container>
        </Background>
      </ScrollView>
      <ModalView visible={openGuildModal} closeModal={handleCloseModal}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};

export default AppointmentCreate;
