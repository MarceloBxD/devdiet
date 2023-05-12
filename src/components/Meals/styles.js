import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  margin-top: 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: #333638;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 12px;

  width: 327px;
  height: 50px;

  /* Base/gray_200 */

  background: #333638;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;

export const leftIcon = styled.Image`
  width: 18;
  height: 18;
`;
