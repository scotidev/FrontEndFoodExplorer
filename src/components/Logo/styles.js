import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: clamp(1.2rem, 0.8rem + 2vw, 2.4rem);

  gap: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
