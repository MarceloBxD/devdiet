import { Button, Text } from "react-native-paper";

export default ({ title, onPress, mode }) => {
  return (
    <Button
      style={{ marginTop: 20 }}
      buttonColor="#F9A826"
      mode={mode}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: "#fff",
        }}
      >
        {title}
      </Text>
    </Button>
  );
};
