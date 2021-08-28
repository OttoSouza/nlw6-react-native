import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/index";
import { useTheme } from 'styled-components/native';
import AppointmentDetails from '../screens/AppointmentDetails/index';
import AppointmentCreate from '../screens/AppointmentCreate/index';

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
  const {colors} = useTheme()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.secondary100,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Stack.Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Stack.Navigator>
  );
};
