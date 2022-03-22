import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLOR.DIV};
  height: 120px;
  margin: 50px 0px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
  font-family: "Roboto Condensed", sans-serif;
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  label {
    color: var(--blue);
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
      background-color: var(--white-green);
      margin-top: 10px;
      margin-bottom: -10px;
      outline: none;
      border: none;
      width: 250px;
      color: var(--blue);
      font-weight: bold;
      border-radius: 5px;
      height: 25px;
      font-size: 0.8rem;
      transition: 0.5s;
      padding-left: 10px;
    }
    input:focus {
      background-color: var(--blue);
      color: var(--green);
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
    margin-top: 10px;
    margin-bottom: -5px;
    height: 25px;
    width: 80px;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 15px;
    outline: none;
    border: none;
    transition: 0.4s;
    background-color: var(--white-green);
    color: var(--blue);
    font-weight: bold;
  }
  input:focus {
    background-color: var(--blue);
    color: var(--white-green);
  }
`;
export const Submit = styled.div`
  margin: auto;
  margin-top: 20px;
  input {
    width: 200px;
    font-size: 1rem;
    border: none;
    padding: 5px;
    border: 2px solid var(--blue);
    transition: 0.5s;
    border-radius: 5px;
    font-weight: bold;
  }
  input:hover {
    border: 2px solid var(--green);
    color: var(--blue);
    letter-spacing: 2px;
  }
`;
export const ReceiveAlldata = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
