import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { categories } from "../../util/categories";
import Category from "../Category";

import { Container } from "./styles";

interface Props {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean
}

export const CategorySelect: React.FC<Props> = ({ categorySelected, setCategory, hasCheckBox = false }) => {
  
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          title={category.title}
          icon={category.icon}
          key={category.id}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </Container>
  );
};
