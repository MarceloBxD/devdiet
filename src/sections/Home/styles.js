import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Logo = styled.Image`
  width: 37px;
  height: 37px;
`;

export const Flex = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
