import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  > .favoritesList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
  }
`;
