import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  gap: 2px;
  position: relative;
  margin-top: ${(props) => props.marginTop || "30px"};
  /* Brand/Green/Light */

  background: #e5f0db;
  border-radius: 8px;
`;

export const Percent = styled.Text`
  font-size: 22px;
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
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left || "auto"};
`;
