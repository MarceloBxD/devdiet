import * as C from "./styles";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Statistics")}>
      <C.Container>
        <C.Percent>90.86%</C.Percent>
        <C.Text>das refeições dentro da dieta</C.Text>
        <C.Icon
          top="10px"
          right="10px"
          source={require("../../../assets/vector.png")}
        />
      </C.Container>
    </Pressable>
  );
};
