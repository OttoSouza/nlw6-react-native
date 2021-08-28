import React from "react";
import { View, ActivityIndicator } from "react-native";

// import { Container } from './styles';
import { useTheme } from "styled-components/native";

const Load: React.FC = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Load;
