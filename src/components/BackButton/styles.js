import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 140%;

  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  width: fit-content;

  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    margin-left: 6rem;

    font-size: 2.4rem;
  }
`;
