import * as C from "./styles";
import { useState } from "react";
import { Modal, Portal, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const navigation = useNavigation();

  return (
    <C.Container>
      <C.Text>Refeições</C.Text>
      <C.Button onPress={() => navigation.navigate("NewMeal")}>
        <C.leftIcon
          alt="plusicon"
          source={require("../../../assets/plusicon.png")}
        />
        <C.TextButton>Nova refeição</C.TextButton>
      </C.Button>
    </C.Container>
  );
};
