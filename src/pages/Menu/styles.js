import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > .header {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    width: 100%;
    height: 11rem;
    display: flex;
    align-items: end;
    padding: 0 0 3rem 3rem;

    > a button {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: transparent;
      font-size: 2.4rem;
      height: 2.4rem;
      margin-right: 1rem;
      transition: 0.5s;
    }

    > a button:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Roboto", sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
    }
  }

  > .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    align-items: flex-start;
    gap: 1rem; /* Espaçamento entre os itens do menu */
    flex-grow: 1; /* Permite que o conteúdo cresça e empurre o footer para baixo */

    .menu-item-wrapper {
      /* Nova classe genérica */
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      width: 100%;

      > a button,
      button {
        /* Aplica estilos tanto para link com botão quanto para botão direto */
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        background-color: transparent;
        margin-top: 2.6rem;
        padding-bottom: 1rem;
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        font-weight: 300;
        line-height: 140%;
        transition: 0.5s;
      }

      > a button:hover,
      button:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
      }
    }
  }

  > footer {
    margin-top: auto; /* Garante que o footer fique no final da página */
  }
`;
