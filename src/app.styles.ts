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
  background-color: var(--green);
  color: ${({ theme }) => theme.COLOR.BACKGROUND};
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-weight: bold;
  transition: 0.5s;
  :hover {
    background-color: var(--red);
    color: ${({ theme }) => theme.COLOR.TEXT};
  }
`;
