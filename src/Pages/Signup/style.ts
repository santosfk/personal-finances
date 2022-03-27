import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
`;
export const Head = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: var(--white-green);
  span {
    color: var(--red);
  }
`;
export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
export const Button = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 1.7rem;
  text-align: center;
  background-color: var(--red);
  border: none;
  outline: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  color: white;
  transition: 0.5s;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  :hover {
    background-color: var(--white-green);
    letter-spacing: 2px;
  }
  .icon {
    color: white;
  }
`;
export const Content = styled.div``;
export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
`;
export const Collum = styled.div<{ color?: String }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: ${(props) => props.color};
  span {
    font-size: 1.8;
  }
  .icon {
    color: var(--white-green);
  }
  .SecondIcon {
    color: var(--red);
  }
  .ThirdIcon {
    color: var(--white-blue);
    font-size: 2rem;
  }
`;
