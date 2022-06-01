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
  gap: 1rem;
  align-items: center;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.COLOR.INPUTS};
  font-size: 1rem;
  text-align: center;
`;
export const LabelSwitch = styled.div`
  font-size: 0.7rem;
`;
export const Body = styled.div`
  margin: auto;
  max-width: 980px;
`;
export const GitHubWrapper = styled.a`
  width: 100px;
  height: 50px;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  font-size: 2rem;
  :hover {
    background-color: grey;
  }
`;
