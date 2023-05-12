import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-top: 30px;

  width: 327px;
  height: 251px;

  /* Inside auto layout */

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

export const Day = styled.Text`
  width: 74px;
  height: 23px;

  /* Title S */

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  /* or 23px */

  display: flex;
  align-items: center;

  /* Base/gray_100 */

  color: #1b1d1e;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;

export const ContainerMeal = styled.View`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  gap: 12px;

  width: 327px;
  height: 49px;

  /* Base/gray_500 */

  border: 1px solid #dddedf;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

export const Hour = styled.Text`
  width: 32px;
  height: 16px;

  /* Body XS */

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  /* identical to box height, or 16px */

  display: flex;
  align-items: center;

  /* Base/gray_100 */

  color: #1b1d1e;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;

export const Name = styled.Text`
  width: 217px;
  height: 21px;

  /* Body M */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
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
