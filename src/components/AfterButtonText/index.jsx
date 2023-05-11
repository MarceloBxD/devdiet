import { View, Text } from "react-native";

export default () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#ADADAD",
          height: 1,
          width: 110,
        }}
      ></View>
      <Text style={{ color: "#707070" }}>Or login with</Text>
      <View
        style={{
          backgroundColor: "#ADADAD",
          height: 1,
          width: 110,
        }}
      ></View>
    </View>
  );
};
