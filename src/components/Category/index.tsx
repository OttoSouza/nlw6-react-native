import React from "react";

import { Container, Content, Wrapper, Title } from "./styles";
import { ICategory } from "../../interface/ICategory";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components/native";

const Category: React.FC<ICategory> = ({
  title,
  icon: Icon,
  checked = true,
  hasCheckBox = false,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <LinearGradient
        colors={[colors.secondary50, colors.secondary70]}
        style={{ borderRadius: 8 }}
      >
        <LinearGradient
          colors={[
            checked ? colors.secondary85 : colors.secondary50,
            colors.secondary40,
          ]}
        >
          <Content checked={checked}>
            {hasCheckBox && <Wrapper checked={checked} />}

            <Icon width={48} height={48} />
            <Title>{title}</Title>
          </Content>
        </LinearGradient>
      </LinearGradient>
    </Container>
  );
};

export default Category;
