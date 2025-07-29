import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 5px;
  padding: 0 1.6rem;
  height: 4.8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 2rem;
    margin-right: 1.4rem;
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: transparent;

    flex-grow: 1;
    height: 100%;

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    text-align: start;

    border: none;
    outline: none;
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
