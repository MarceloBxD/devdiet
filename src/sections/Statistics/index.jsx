import * as C from "./styles";
import { DietPercentContainer, StatisticsContainer } from "../../components";

export default () => {
  return (
    <>
      <DietPercentContainer />
      <C.Container>
        <C.Typography>Estatísticas gerais</C.Typography>
        <StatisticsContainer
          number="4"
          text="melhor sequência de pratos dentro da dieta"
        />
        <StatisticsContainer number="621" text="refeições registradas" />
        <C.Flex>
          <C.StatisticsContainerStatistics bgColor="#E5F0DB">
            <C.NumberText>32</C.NumberText>
            <C.TextStatistics>refeições dentro da dieta</C.TextStatistics>
          </C.StatisticsContainerStatistics>
          <C.StatisticsContainerStatistics bgColor="#F4E6E7">
            <C.NumberText>77</C.NumberText>
            <C.TextStatistics>refeições fora da dieta</C.TextStatistics>
          </C.StatisticsContainerStatistics>
        </C.Flex>
      </C.Container>
    </>
  );
};
