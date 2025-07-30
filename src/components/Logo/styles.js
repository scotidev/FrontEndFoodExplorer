import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: clamp(1.2rem, 0.8rem + 2vw, 2.4rem);

  gap: 1.1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;

  > svg {
    width: clamp(3rem, 2rem + 2vw, 4rem);
    height: clamp(3rem, 2rem + 2vw, 4rem);
  }
`;
