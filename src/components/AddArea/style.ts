import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 100px;
  margin: 50px 0px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
  font-family: "Roboto Condensed", sans-serif;
`;
export const FormContent = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DataContent = styled.div`
  display: flex;
  margin-top: 20px;
  label {
    font-weight: bold;
    color: var(--green);
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
    color: var(--green);
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
  }
`;
export const TitleContent = styled.div``;
export const ValueContent = styled.div``;
