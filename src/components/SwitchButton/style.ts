import styled from "styled-components";

export const LabelSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  .switch {
    margin: 0px 20px;
  }
  .sun {
    color: ${({ theme }) => theme.COLOR.ICON_SUN};
    font-size: 1.5rem;
  }
  .moon {
    color: ${({ theme }) => theme.COLOR.ICON_MOON};
    font-size: 1.5rem;
  }
`;
