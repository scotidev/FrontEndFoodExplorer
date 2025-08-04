import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.6rem;
  z-index: 100;

  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  // Cores de fundo baseadas no tipo do toast
  color: ${({ type, theme }) => {
    switch (type) {
      case "success":
        return theme.COLORS.CAKE_100;
      case "error":
        return theme.COLORS.LIGHT_300;
      default:
        return theme.COLORS.LIGHT_300;
    }
  }};

  background-color: ${({ type, theme }) => {
    switch (type) {
      case "success":
        return theme.COLORS.MINT;
      case "error":
        return theme.COLORS.TOMATO_300;
      default:
        return theme.COLORS.TOMATO_300;
    }
  }};

  // Animação de entrada e saída
  ${({ isvisible }) =>
    isvisible
      ? css`
          animation: ${fadeIn} 0.5s forwards;
        `
      : css`
          animation: ${fadeOut} 0.5s forwards;
        `}
`;
