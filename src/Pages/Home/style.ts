import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  @import url("https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@500&display=swap");
  font-family: "Lato", sans-serif;
`;
export const Header = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.COLOR.INPUTS};
  font-size: 2rem;
`;
export const LabelSwitch = styled.div`
  font-size: 1rem;
`;
export const Body = styled.div`
  margin: auto;
  max-width: 980px;
`;
