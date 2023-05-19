import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as C from "./styles";

export default () => {
  return (
    <>
      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 57,
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Nova refeição
        </Text>
      </View>

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
      </Animatable.View>
    </>
  );
};
