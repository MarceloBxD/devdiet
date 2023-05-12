import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  gap: 2px;
  isolation: isolate;

  position: relative;
  margin-top: 30px;
  /* Brand/Green/Light */

  background: #e5f0db;
  border-radius: 8px;
`;

export const Percent = styled.Text`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #333638;
  text-align: center;
`;

export const Icon = styled.Image`
  position: absolute;
  top: 10px;
  right: 10px;
`;
