import React, { useCallback, useState } from "react";
import {
  Container,
  Header,
  CategoryContainer,
  Main,
  CustomFlatList,
} from "./styles";
import { Profile } from "../../components/Profile/index";
import { Background } from "../../components/Background/index";
import { ButtonAdd } from "../../components/ButtonAdd/index";
import { CategorySelect } from "../../components/CategorySelect/index";
import { ListHeader } from "../../components/ListHeader";
import { FlatList, Text } from "react-native";
import Appointment, {
  IAppointmentProps,
} from "../../components/Appointment/index";
import { Divider } from "../../components/Divider";
import {
  CommonActions,
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import AsyncSotage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../config/storage";
import Load from "../../components/Load";

export const Home: React.FC = () => {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<IAppointmentProps[]>([]);
  const navigation: NavigationProp<any> = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: IAppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }
  function handleAppointmentCreate() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "AppointmentCreate",
      })
    );
  }

  async function handleLoadAppointments() {
    const response = await AsyncSotage.getItem(COLLECTION_APPOINTMENTS);
    const storage: IAppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      handleLoadAppointments();
    }, [category])
  );

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </Header>
      </Container>

      <CategoryContainer>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </CategoryContainer>
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subTitle={`TOtal ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <Divider screen="Home" />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 69 }}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
          />
        </>
      )}
    </Background>
  );
};
