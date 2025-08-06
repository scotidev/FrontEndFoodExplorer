import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: fit-content;
  height: 5.6rem;
  padding: 1.4rem 2.2rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  white-space: nowrap;

  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  > svg {
    font-size: 3.5rem;
  }
`;
