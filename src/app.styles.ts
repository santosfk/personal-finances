import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
`;
export const Header = styled.div`
  width: 100%;
  padding-top: 10px;
  text-align: center;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.COLOR.BLUE};
`;
export const Body = styled.div`
  margin: auto;
  max-width: 980px;
`;
export const SwitchTheme = styled.button`
  width: 100px;
  padding: 5px;
  position: relative;
  margin: auto;
`;
