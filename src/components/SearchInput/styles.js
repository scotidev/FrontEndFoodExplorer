import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 5px;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 0 1.6rem;

  > button {
    /* Estilo do botão da lupa */
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 1.4rem;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 2.4rem;
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  > input {
    flex: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: transparent;
    border: none;
    outline: none;

    height: 100%;

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    text-align: start;

    &::placeholder {
      /* Estilo para o placeholder */
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: 5px;
      /* Remove o padding padrão do input quando focado, se o border de 1px deslocar */
      padding: 0 0.5rem;
      /* Ajuste a largura do input para compensar a borda se necessário */
      box-sizing: border-box;
    }
  }

  .loading-feedback {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    z-index: 1001;
    white-space: nowrap;
  }
`;

export const SearchResults = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: "Roboto", sans-serif;

  position: absolute;
  top: 100%; /* Posiciona abaixo do input */
  left: 0;
  right: 0;
  z-index: 1000;
  overflow-y: auto;
  max-height: 250px;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_800}; /* Borda mais discreta */
  border-radius: 0 0 5px 5px; /* Apenas as bordas de baixo arredondadas */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Sombra para destacar */

  /* Adicionado para preencher o espaço do scrollbar, se visível */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  .searchResultItem {
    padding: 1rem 1.6rem; /* Padding ajustado para melhor espaçamento */
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_800}; /* Separador entre itens */

    &:last-child {
      border-bottom: none; /* Remove borda do último item */
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    strong {
      font-size: 1.8rem; /* Ajustado para um tamanho mais comum */
      font-weight: 700; /* Negrito */
      color: ${({ theme }) => theme.COLORS.LIGHT_100}; /* Cor mais visível */
      text-decoration: none; /* Removido sublinhado padrão */
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-top: 0.5rem; /* Espaçamento entre título e ingredientes */
      padding: 0;
      list-style: none;
      color: ${({ theme }) =>
        theme.COLORS.LIGHT_400}; /* Cor para ingredientes */
    }

    li {
      font-size: 1.4rem; /* Ajuste para ingredientes */
      white-space: nowrap;
      background-color: ${({ theme }) =>
        theme.COLORS.DARK_700}; /* Fundo para cada ingrediente */
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    max-height: 180px; /* Ajuste para mobile se necessário */
  }
`;
