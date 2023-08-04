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
      name: "Whey protein",
      isDiet: true,
    },
    {
      id: 3,
      hour: "12:30",
      name: "Salada cesar",
      isDiet: true,
    },
    {
      id: 4,
      hour: "9:30",
      name: "Vitamina",
      isDiet: true,
    },
    {
      id: 1,
      name: "X-Tudo",
      hour: "20:00",
      isDiet: false,
    },
    {
      id: 2,
      hour: "16:00",
      name: "Whey protein",
      isDiet: true,
    },
    {
      id: 3,
      hour: "12:30",
      name: "Salada cesar",
      isDiet: true,
    },
    {
      id: 4,
      hour: "9:30",
      name: "Vitamina",
      isDiet: true,
    },
  ];

  return (
    <C.Container>
      <C.Day>12.08.22</C.Day>
      {summary.map((item) => (
        <C.ContainerMeal key={item.id}>
          <C.Hour>{item.hour}</C.Hour>
          <C.Status
            source={
              item.isDiet
                ? require("../../../assets/greenstatus.png")
                : require("../../../assets/redstatus.png")
            }
          />
          <C.Name>{item.name}</C.Name>
        </C.ContainerMeal>
      ))}
    </C.Container>
  );
};
