import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";

import FormContainer from "../../components/FormLoginContainer";

export default () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#EFF0F0", flex: 1 }}>
      <Animatable.Text
        animation={"fadeInLeft"}
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#000",
          position: "absolute",
          left: 26,
          top: 112,
        }}
      >
        Login
      </Animatable.Text>
      <FormContainer />
    </SafeAreaView>
  );
};
