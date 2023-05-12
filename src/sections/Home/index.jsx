import { StatusBar } from "expo-status-bar";
import { Avatar, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as C from "./styles";
import * as Animatable from "react-native-animatable";
import DietPercentContainer from "../../components/DietPercentContainer";
import Meals from "../../components/Meals";
import DaySummary from "../../components/DaySummary";

export default () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <C.Container>
        <Animatable.View animation={"bounceInDown"}>
          <C.Header>
            <C.Flex>
              <C.Logo source={require("../../../assets/ForkKnife.png")} />
              <Text style={{ width: 36, fontWeight: "700" }}>Daily Diet</Text>
            </C.Flex>
            <Avatar.Image
              size={55}
              source={require("../../../assets/marcelo_bracet.jpeg")}
            />
          </C.Header>
        </Animatable.View>
        <Animatable.View animation={"bounceInLeft"}>
          <DietPercentContainer />
          <Meals />
        </Animatable.View>
        <Animatable.View animation={"fadeInUp"}>
          <DaySummary />
        </Animatable.View>
      </C.Container>
    </SafeAreaView>
  );
};
