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
  @media (max-width: 2560px) {
    font-size: 2.5rem;
  }
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
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
  @media (max-width: 2560px) {
    width: 270px;
    padding: 15px;
    font-size: 2rem;
  }
  @media (max-width: 1440px) {
    width: 250px;
    padding: 10px;
    font-size: 1.8rem;
  }
  @media (max-width: 1024px) {
    width: 220px;
    padding: 8px;
    font-size: 1.6rem;
  }
  @media (max-width: 375px) {
    width: 200px;
    padding: 5px;
    font-size: 1.3rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 2rem;
  }
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
    font-size: 1.5rem;
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
  @media (max-width: 2560px) {
    font-size: 2.8rem;
    span {
      font-size: 2.5rem;
    }
  }
  .ThirdIcon {
    font-size: 3rem;
  }
  @media (max-width: 1440px) {
    font-size: 2.4rem;
    span {
      font-size: 2rem;
    }
    .ThirdIcon {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 1237px) {
    font-size: 2.1rem;
    span {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 1177px) {
    font-size: 2rem;
    span {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    span {
      font-size: 1.5rem;
    }
    .ThirdIcon {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 887px) {
    font-size: 1.6rem;
    span {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 783px) {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    margin: 50px 0;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
    span {
      font-size: 1.2rem;
    }
    .ThirdIcon {
      font-size: 1.8rem;
    }
  }
`;
export const AnimationContent = styled.div`
  margin: auto;
  width: 400px;
  height: 400px;
  @media (max-width: 375px) {
    display: none;
  }
`;
