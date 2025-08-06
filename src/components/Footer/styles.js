import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  width: 100%;
  height: 6rem;
  padding: 2.4rem 6rem;
  margin-top: 4.6rem;
  gap: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Roboto", sans-serif;

  > div {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};

    font-size: clamp(0.75rem, 0.1696rem + 2.9018vw, 1.5625rem);
    font-weight: 700;

    display: flex;
    align-items: center;
    gap: 1rem;

    white-space: nowrap;

    > svg {
      width: clamp(1.5625rem, 0.8036rem + 3.7946vw, 2.625rem);
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    font-size: clamp(0.75rem, 0.1429rem + 1.7857vw, 1rem);
    font-weight: 400;

    white-space: nowrap;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    justify-content: space-around;

    padding: 4rem 0;
    gap: 30rem;

    > div {
      font-size: 2rem;
    }

    > p {
      font-size: 1.4rem;
    }
  }
`;
