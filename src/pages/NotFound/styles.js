import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-decoration: none;
  }
`;
