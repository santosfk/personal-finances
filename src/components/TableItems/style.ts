import styled from "styled-components";

export const TableContainer = styled.tr`
  text-align: center;
  background-color: ${({ theme }) => theme.COLOR.DIV};
  border: 2px solid ${({ theme }) => theme.COLOR.DIV};
  border-radius: 50px;
  margin-bottom: 10rem;
`;

export const TableItem = styled.td`
  color: ${({ theme }) => theme.COLOR.FISRTTEXT};

  font-weight: bold;
`;

export const Category = styled.div<{ color: String }>`
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bold;

  border-radius: 5px;
`;
export const Value = styled.div<{ color: String }>`
  color: ${(props) => props.color};
`;
export const RemoveItem = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.COLOR.FISRTTEXT};
  width: 25px;
  padding: 3px;
  border-radius: 3px;
  transition: 0.5s;

  :hover {
    background-color: ${({ theme }) => theme.COLOR.SECONDTEXT};
    color: white;
  }
`;
