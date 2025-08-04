import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: fit-content;
  height: 3.2rem;
  padding: 0.4rem 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 500;

  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;

    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    > svg {
      font-size: 2.5rem;
    }
  }
`;
