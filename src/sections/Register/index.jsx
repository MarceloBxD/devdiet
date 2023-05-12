import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";

import Bubble from "../../components/Bubble";
import FormCadasterContainer from "../../components/FormCadasterContainer/index";

export default () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F9A826", flex: 1 }}>
      <Bubble />
      <Animatable.Text
        animation={"fadeInLeft"}
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#fff",
          position: "absolute",
          left: 26,
          top: 112,
        }}
      >
        Register
      </Animatable.Text>
      <FormCadasterContainer />
    </SafeAreaView>
  );
};
