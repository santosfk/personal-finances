import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
`;
export const Title = styled.div`
  color: var(--blue);
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
`;
export const Value = styled.div<{ color?: String }>`
  color: ${(props) => props.color ?? "black"};
  text-align: center;
`;
