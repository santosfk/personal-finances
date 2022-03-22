import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
  font-family: "Roboto Condensed", sans-serif;
  background-color: ${({ theme }) => theme.COLOR.DIV};
  width: 100%;
  height: 50px;
  margin: 50px 0px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  color: var(--green);
  font-weight: bold;
`;
export const MonthArrow = styled.div`
  width: 60px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: 0.5s;
  :hover {
    transform: translateY(5px);
  }
`;
export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.TEXT};
  font-weight: bold;
`;
export const MonthTitle = styled.div``;
