import styled from "styled-components";

export const TableContainer = styled.tr`
  text-align: center;
`;

export const TableItem = styled.td`
  margin: 10px 0;

  color: ${({ theme }) => theme.COLOR.TEXT};

  font-weight: bold;

`;

export const Category = styled.div<{ color: String }>`
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bold;
  padding: 2px;
`;
export const Value = styled.div<{ color: String }>`
  color: ${(props) => props.color};
`;
export const RemoveItem = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.COLOR.TEXT};
`;
