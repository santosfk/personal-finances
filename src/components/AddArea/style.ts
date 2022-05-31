import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLOR.DIV};
  height: 200px;
  margin-bottom: 50px;
  padding: 5px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -5px;
`;

export const DataContent = styled.div`
  display: flex;
  margin: 0px 20px;
  label {
    font-weight: bold;
    color: ${({ theme }) => theme.COLOR.SECONDTEXT};
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  input {
    outline: none;
    font-weight: bold;
    color: black;
    padding: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLOR.INPUTS};
  }
`;

export const CategoryContent = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.COLOR.SECONDTEXT};
  }
`;
export const OptionsRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  label {
    margin: 0px 10px;
    color: ${({ theme }) => theme.COLOR.WHITE};
    font-weight: bold;
    color: ${({ theme }) => theme.COLOR.INPUTS};
  }
`;
export const TitleContent = styled.div`
  margin: 0px 20px;
  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${({ theme }) => theme.COLOR.SECONDTEXT};
    font-weight: bold;
  }
`;
export const ValueContent = styled.div`
  margin: 0px 20px;
  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.COLOR.SECONDTEXT};
  }
`;

export const Submit = styled.div`
  margin: auto;

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
    color: ${({ theme }) => theme.COLOR.FISRTTEXT};
  }
  input:hover {
    border: 2px solid var(--white-green);
    color: var(--white-green);
    letter-spacing: 2px;
  }
`;
export const ReceiveAlldata = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
