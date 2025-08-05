import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  height: 100vh;

  font-family: "Poppins", sans-serif;
  text-align: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
    margin-bottom: 2rem;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: clamp(3rem, 5vw, 6rem);
    font-weight: 700;

    margin-bottom: 1rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    line-height: 1.5;

    margin-bottom: 2rem;
  }
`;
