import * as C from "./styles";

export default () => {
  const summary = [
    {
      id: 1,
      name: "X-Tudo",
      hour: "20:00",
      isDiet: false,
    },
    {
      id: 2,
      hour: "16:00",
      name: "Whey protein com leite",
      isDiet: true,
    },
    {
      id: 3,
      hour: "12:30",
      name: "Salada cesar com frango",
      isDiet: true,
    },
    {
      id: 4,
      hour: "9:30",
      name: "Vitamina de banana com aveia",
      isDiet: true,
    },
  ];

  return (
    <C.Container>
      <C.Day>12.08.22</C.Day>
      {summary.map((item) => (
        <C.ContainerMeal key={item.id}>
          <C.Hour>{item.hour}</C.Hour>
          <C.Name>{item.name}</C.Name>
          <C.Status
            source={
              item.isDiet
                ? require("../../../assets/greenstatus.png")
                : require("../../../assets/redstatus.png")
            }
          />
        </C.ContainerMeal>
      ))}
    </C.Container>
  );
};
