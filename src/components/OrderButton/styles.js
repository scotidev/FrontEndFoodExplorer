import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: 21.6rem;
  height: 5.6rem;
  padding: 1.6rem 3.3rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-family: "Poppins", sans-serif;
  font-weight: 500;

  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  > svg {
    font-size: 3.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.Tablet}) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 18rem;
    padding: 1rem 2rem;
    font-size: 1.4rem;
    > svg {
      font-size: 3rem;
    }
  }
`;
