import { Text, View, Button } from "react-native";
import * as Animatable from "react-native-animatable";
import * as C from "./styles";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";

import { useState } from "react";

export default () => {
  const [date, setDate] = useState(new Date(2020, 4, 25));
  const [show, setShow] = useState(false);

  const [isDiet, setIsDiet] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Animatable.View
        animation="fadeInUpBig"
        style={{
          position: "absolute",
          left: 0,
          top: 129,
          bottom: 0,
          width: "100%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          padding: 20,
        }}
      >
        <C.Label>Nome</C.Label>
        <C.TextInput></C.TextInput>
        <C.Label>Descrição</C.Label>
        <C.TextInput></C.TextInput>

        <C.Label style={{ marginTop: 30 }}>Está dentro da dieta?</C.Label>
        <C.DietButton>
          <Text style={{ color: "white" }}>Sim</Text>
        </C.DietButton>
        <C.DietButton>
          <Text style={{ color: "white" }}>Não</Text>
        </C.DietButton>

        <Button title="Show Date Picker" onPress={() => setShow(true)} />
        {show && (
          <DateTimePickerAndroid
            onChange={(date) => setDate(date)}
            value={date}
          />
        )}
      </Animatable.View>
    </>
  );
};
