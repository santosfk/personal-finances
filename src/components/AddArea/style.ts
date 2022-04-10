import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLOR.DIV};
  height: 150px;
  margin: 30px 0px;
  padding: 5px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
  font-family: "Roboto Condensed", sans-serif;
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -5px;
`;

export const DataContent = styled.div`
  display: flex;
  margin-top: 20px;
  label {
    font-weight: bold;
    color: var(--red);
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  input {
    margin-top: 5px;
    outline: none;
    font-weight: bold;
    color: var(--blue);
  }
`;

export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  span {
    text-align: center;
    font-weight: bold;
    color: var(--red);
  }
`;
export const OptionsRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  label {
    color: ${({ theme }) => theme.COLOR.BLUE};
    margin: 0px 5px;
    font-weight: bold;
  }
`;
export const TitleContent = styled.div`
  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--red);
    font-weight: bold;
    margin-top: 5px;
    input {
      background: none;
      border: 2px solid var(--white-green);
      margin-top: 10px;
      margin-bottom: -10px;
      outline: none;
      width: 250px;
      color: ${({ theme }) => theme.COLOR.INPUTS};
      font-weight: bold;
      border-radius: 5px;
      height: 30px;
      font-size: 0.8rem;
      transition: 0.5s;
      padding-left: 10px;
    }
    input:focus {
      border: 2px solid var(--white-blue);
      transform: translateY(3px);
      letter-spacing: 2px;
    }
  }
`;
export const ValueContent = styled.div`
  margin-top: 10px;
  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
    color: var(--red);
  }
  input {
    background: none;
    margin-top: 10px;
    margin-bottom: -5px;
    height: 30px;
    width: 80px;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 15px;
    outline: none;
    border: none;
    transition: 0.4s;
    border: 2px solid var(--white-green);
    color: ${({ theme }) => theme.COLOR.INPUTS};
    font-weight: bold;
  }
  input:focus {
    transform: translateY(3px);
    border: 2px solid var(--white-blue);
  }
`;
export const Submit = styled.div`
  margin: auto;
  margin-top: 20px;
  input {
    background: none;
    width: 200px;
    font-size: 1rem;
    border: none;
    padding: 5px;
    border: 2px solid var(--white-blue);
    transition: 0.5s;
    border-radius: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLOR.TEXT};
  }
  input:hover {
    border: 2px solid var(--white-green);
    color: var(--white-green);
    letter-spacing: 2px;
  }
`;
export const ReceiveAlldata = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
