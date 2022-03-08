import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
`;
export const HeadColum = styled.th<{ width?: Number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
`;
