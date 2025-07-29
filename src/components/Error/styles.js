import styled, { keyframes, css } from "styled-components";

// Keyframes para a animação de entrada
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

// Keyframes para a animação de saída
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
  position: fixed; // Posição fixa na tela, fora do fluxo normal do documento.
  top: 0; // Alinha ao topo da viewport.
  left: 0; // Alinha à esquerda da viewport.
  width: 100%; // Ocupa toda a largura da tela.
  padding: 1.6rem; // Espaçamento interno.
  text-align: center; // Centraliza o texto.
  color: ${({ theme }) => theme.COLORS.LIGHT_100}; // Cor do texto.
  font-weight: bold; // Negrito para o texto.
  z-index: 9999; // Garante que o toast esteja acima de outros elementos.
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); // Sombra para destaque.

  // Cores de fundo baseadas no tipo do toast
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "success":
        return theme.COLORS.MINT; // Exemplo de cor verde para sucesso
      case "error":
        return theme.COLORS.TOMATO_300; // Exemplo de cor vermelha para erro (ou TOMATO_300 se definido)
      case "info":
        return theme.COLORS.BLUE_200; // Exemplo de cor azul para informação
      default:
        return theme.COLORS.TOMATO_300; // Padrão para erro
    }
  }};

  // Animação de entrada e saída
  ${({ isvisible }) =>
    isvisible
      ? css`
          animation: ${fadeIn} 0.3s forwards;
        `
      : css`
          animation: ${fadeOut} 0.3s forwards;
        `}
`;
