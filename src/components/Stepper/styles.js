// src/components/Stepper/styles.js
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"; // Adicionar import

export const Container = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  /* Ajustar largura para maior flexibilidade */
  width: fit-content; /* Adapta-se ao conteúdo */
  /* Ou, se preferir uma largura mínima com flexibilidade: */
  /* min-width: 10rem; */
  /* width: 100%; / Max width pode ser útil */

  height: 3.2rem;
  padding: 0.4rem 0.8rem; /* Padding interno */

  display: flex;
  align-items: center;
  justify-content: center; /* Alinha o conteúdo (botões e número) */
  gap: 1.4rem; /* Espaçamento entre os itens */

  font-family: "Roboto", sans-serif;
  font-size: 2rem; /* Tamanho da fonte para o número */
  font-weight: 500;

  > button {
    /* Estilo para os botões que envolvem os ícones */
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; /* Cor dos ícones */
    cursor: pointer;
    display: flex; /* Para centralizar o SVG dentro do botão */
    align-items: center;
    justify-content: center;
    padding: 0; /* Remover padding padrão do botão */
    transition: opacity 0.2s; /* Transição para o disabled */

    &:hover:not(:disabled) {
      opacity: 0.8; /* Efeito de hover */
    }

    &:disabled {
      opacity: 0.5; /* Efeito para botão desabilitado */
      cursor: not-allowed;
    }

    > svg {
      /* Estilo do SVG dentro do botão */
      font-size: 2.5rem;
    }
  }
`;
