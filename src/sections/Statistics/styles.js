import styled from "styled-components/native";

export const Typography = styled.Text`
  color: #1b1d1e;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin-top: 33px;
`;

export const Flex = styled.View`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

export const Container = styled.View`
  align-self: center;
`;

export const StatisticsContainerStatistics = styled.View`
  display: flex;
  margin-top: 25px;
  border-radius: 8px;
  width: 157.5px;
  height: 107px;
  background-color: ${(props) => props.bgColor};
  padding: 16px;
  gap: 8px;

  justify-content: center;
  align-items: center;
`;

export const NumberText = styled.Text`
  height: 31px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  display: flex;
  align-items: center;
  text-align: center;
  color: #1b1d1e;
`;

export const TextStatistics = styled.Text`
  color: #333638;
  width: 125.5px;
  height: 36px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;
