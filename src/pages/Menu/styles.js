import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  animation: ${slideIn} 0.4s ease-out forwards;

  display: flex;
  flex-direction: column;

  > .header {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;
    padding-left: 3rem;

    > a button {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: transparent;

      font-size: 2.5rem;
      font-weight: 900;
      height: 2.4rem;
      margin-right: 1rem;
    }

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Roboto", sans-serif;
      font-size: 2rem;
      font-weight: 400;
    }
  }

  > .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    padding: 2rem;
    gap: 1rem;

    > a,
    button {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      background-color: transparent;

      width: 100%;
      margin-top: 0.4rem;
      padding: 1rem 0;

      font-family: "Poppins", sans-serif;
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 140%;
      text-align: left;
    }

    > a {
      border-bottom: none;
    }
  }

  > footer {
    position: fixed;
    bottom: 0;
  }
`;
