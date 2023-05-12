import * as Animatable from "react-native-animatable";

export default () => {
  return (
    <Animatable.View
      animation={"fadeInRight"}
      style={{
        position: "absolute",
        width: 250,
        borderRadius: 125,
        height: 250,
        left: 214,
        top: -71,
        backgroundColor: "#222",
        borderWidth: 3,
      }}
    ></Animatable.View>
  );
};
