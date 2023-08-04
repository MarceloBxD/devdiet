import styled from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Day = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #1b1d1e;
`;

export const ContainerMeal = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border: 1px solid #dddedf;
  border-radius: 6px;
  padding: 5px 12px;
  margin: 8px 0;
`;

export const Hour = styled.Text`
  width: 100;
  height: 30px;
  font-weight: 700;
  font-size: 12px;

  display: flex;
  align-items: center;
  color: #1b1d1e;
`;

export const Name = styled.Text`
  height: 40px;
  width: 210px;
  /* Body M */

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;

  /* Base/gray_200 */

  color: #333638;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;

export const Status = styled.Image`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  /* Brand/Green/Mid */

  background: #cbe4b4;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;
