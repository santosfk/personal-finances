import { theme } from "@chakra-ui/react";
import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.COLOR.SECONDTEXT};
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
`;
export const Value = styled.div<{ color?: String }>`
  color: ${({ color }) =>
    color ? color : ({ theme }) => theme.COLOR.FISRTTEXT};
  text-align: center;
`;
