import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  align-self: center;
  width: 327px;
  height: 89px;
  margin-top: 25px;
  background-color: #eff0f9;
  border-radius: 8px;
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

export const Detail = styled.Text`
  width: 295px;
  height: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333638;
`;
