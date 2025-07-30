import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: fit-content;
  min-width: 9rem;
  min-height: 4rem;
  padding: 1.2rem 2.4rem;
  border-radius: 5px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;

  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;
