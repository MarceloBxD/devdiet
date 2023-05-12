import * as C from "./styles";

export default () => {
  return (
    <C.Container>
      <C.Text>Refeições</C.Text>
      <C.Button>
        <C.leftIcon
          alt="plusicon"
          source={require("../../../assets/plusicon.png")}
        />
        <C.TextButton>Nova refeição</C.TextButton>
      </C.Button>
    </C.Container>
  );
};
