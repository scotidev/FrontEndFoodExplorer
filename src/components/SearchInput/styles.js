import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"; // Importar se for usar media queries aqui

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 5px;
  height: 4.8rem; /* Define a altura do container principal */
  background-color: ${({ theme }) =>
    theme.COLORS.DARK_900}; /* Move o background para o container */
  padding: 0 1.6rem; /* Padding horizontal para o conteúdo interno */

  > svg {
    /* Estilo do ícone da lupa */
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 2.4rem;
    margin-right: 1.4rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > input {
    flex: 1; /* Permite que o input ocupe todo o espaço restante */
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: transparent; /* Input sem fundo próprio, usa o do container */
    border: none;
    outline: none;

    height: 100%; /* Ocupa a altura total do container */

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    text-align: start;

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: 5px; /* Garante que a borda de foco também seja arredondada */
    }
  }

  .loading-feedback {
    /* Estilo opcional para feedback de carregamento */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    z-index: 1001;
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
  max-height: 250px; /* Definido um max-height fixo para a rolagem interna */

  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para destacar */

  .searchResultItem {
    padding: 0.8rem 1.6rem; /* Padding ajustado para melhor espaçamento */
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) =>
        theme.COLORS.TOMATO_400}; /* Cor de hover para item de busca */
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    strong {
      font-size: 2rem;
      text-decoration: underline;
    }

    ul {
      display: flex;
      flex-wrap: wrap; /* Permite que os ingredientes quebrem linha */
      gap: 0.8rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      font-size: 1.5rem;
      padding: 0.4rem 0;
      white-space: nowrap; /* Evita que o nome do ingrediente quebre */
    }
  }

  /* Estilos para responsividade da caixa de resultados, se necessário */
  @media (max-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    /* Exemplo de ajuste de max-height para mobile */
    max-height: 200px;
  }
`;
