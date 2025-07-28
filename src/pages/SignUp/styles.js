import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.form`
  height: 100vh;
  padding: 16rem 6rem; /* Padding em mobile, ajusta o espaçamento superior e lateral */

  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza itens horizontalmente em mobile */
  justify-content: center; /* Centraliza itens verticalmente em mobile */

  overflow-y: auto; /* Permite rolagem em telas menores */

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    flex-direction: row; /* Layout em linha para desktop */
    justify-content: center;
    align-items: center;
    gap: 6rem; /* Espaçamento entre o logo e a caixa de login */

    overflow: hidden; /* Evita rolagem desnecessária em desktop */
    padding: 0 6rem; /* Remove padding vertical extra em desktop, centraliza com align-items */
  }

  /* Estilos para o componente Logo (que está fora do .loginBox) */
  /* Este seletor >div (se referindo ao wrapper da Logo) precisa ser mais específico
       se houver outras divs diretas no Container que não sejam a Logo.
       Uma abordagem melhor é envolver a Logo em uma styled-component dedicada, se ela não tiver um wrapper próprio.
       Assumindo que >div se refere ao Logo e seu wrapper implícito: */
  > .logo-container {
    /* Renomeado para clareza */
    margin-bottom: 7rem; /* Margem inferior em mobile */
    font-size: 1.7rem; /* Não diretamente aplicável ao SVG, mas ao texto se houver */
    white-space: nowrap;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      width: 50%; /* Ocupa 50% da largura em desktop */
      margin-bottom: 0; /* Remove margem inferior em desktop */
      display: flex; /* Para alinhar o conteúdo da logo */
      justify-content: flex-end; /* Alinha a logo à direita dentro do seu espaço */
    }

    /* Seletor para o SVG dentro do logo */
    > svg {
      min-height: 4rem;
      min-width: 4rem;
      /* Se houver texto ao lado do SVG na Logo, estilize-o aqui ou dentro do componente Logo */
    }
  }

  > .loginBox {
    width: 100%; /* Ocupa largura total em mobile */
    max-width: 48rem; /* Limita a largura máxima da caixa de login */
    padding: 3.2rem; /* Padding para mobile para o conteúdo interno da caixa */

    display: flex;
    flex-direction: column; /* Organiza os itens em coluna */
    align-items: center; /* Centraliza os itens horizontalmente */
    justify-content: center; /* Centraliza verticalmente (se houver espaço) */

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      padding: 6.4rem; /* Aumenta o padding para desktop */
      margin: 0; /* Remove margin auto para o layout flex */
      border-radius: 16px;
      width: 50%; /* Ocupa 50% da largura em desktop */
      max-width: 50rem; /* Limite ajustado para desktop */
    }

    > h2 {
      display: none; /* Esconde em mobile */

      @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        display: block; /* Mostra em desktop */
        margin-bottom: 3.2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
      }
    }

    > .inputWrapper {
      width: 100%; /* Ocupa 100% da largura dentro do loginBox */
      margin-bottom: 3.2rem;

      > label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        display: inline-block;
        margin-bottom: 1rem;
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem; /* Ajuste o tamanho da fonte da label se necessário */
        font-weight: 400;
        line-height: 100%;
      }
    }

    > button {
      width: 100%; /* Botão ocupa 100% da largura do loginBox */
      /* min-width: 22rem; */ /* Removido para flexibilidade, já coberto por width: 100% */
    }

    > a {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 1.44rem;
      font-weight: 500;
      line-height: 2.4rem;
      width: fit-content;
      margin: 3.2rem auto 0; /* Centraliza o link */
      white-space: nowrap;
      transition: 0.5s;

      &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;
