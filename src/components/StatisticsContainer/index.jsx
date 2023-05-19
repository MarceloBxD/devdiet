import * as C from "./styles";

export default ({ number, text }) => {
  return (
    <C.Container>
      <C.NumberText>{number}</C.NumberText>
      <C.Detail>{text}</C.Detail>
    </C.Container>
  );
};
