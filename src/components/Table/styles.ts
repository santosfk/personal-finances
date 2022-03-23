import styled from "styled-components";

export const Container = styled.table`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
  font-family: "Roboto Condensed", sans-serif;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.COLOR.DIV};
`;
export const HeadColum = styled.th<{ width?: Number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};

  color: ${({ theme }) => theme.COLOR.TEXT};


  font-weight: bold;

`;
