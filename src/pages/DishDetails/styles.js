import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo principal horizontalmente */

  overflow-y: auto; /* Permite rolagem se o conteúdo for maior que a tela */

  > .content {
    width: 75%; /* Largura do conteúdo em mobile e desktop */
    margin-top: 12rem; /* Espaço para o Header */
    flex-grow: 1; /* Permite que o conteúdo ocupe o espaço restante */
    padding-bottom: 3rem; /* Espaçamento antes do footer */

    display: flex;
    flex-direction: column; /* Coluna em mobile */
    align-items: center; /* Centraliza itens dentro do content em mobile */
    justify-content: center; /* Centraliza verticalmente em mobile */
    gap: 2rem; /* Espaçamento entre as seções da imagem e descrição */

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      flex-direction: row; /* Layout em linha para desktop */
      margin: auto 0; /* Centraliza verticalmente em desktop */
      gap: 4rem; /* Aumenta o gap em desktop para melhor espaçamento */
      justify-content: center; /* Centraliza horizontalmente em desktop */
      padding-bottom: 0; /* Remove padding inferior extra em desktop, footer já tem seu próprio espaço */
    }

    > .backAndImageWrapper {
      width: 100%; /* Ocupa largura total em mobile */
      display: flex;
      flex-direction: column;
      align-items: center; /* Centraliza a imagem e o botão de voltar */

      @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        width: auto; /* Permite que a imagem e o botão ocupem apenas o espaço necessário */
        align-items: flex-start; /* Alinha o botão de voltar à esquerda */
      }

      > a {
        /* Link do botão de voltar */
        align-self: flex-start; /* Alinha o link à esquerda em mobile */
        margin-bottom: 1.4rem; /* Espaçamento abaixo do botão de voltar */

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
          height: auto; /* Ajusta a altura */
          margin-bottom: 0; /* Remove margem inferior para o layout em linha */
          position: absolute; /* Posiciona o botão de voltar no canto superior esquerdo da tela */
          top: 10rem; /* Ajuste a posição vertical */
          left: 10%; /* Ajuste a posição horizontal para corresponder ao content */
          transform: translateX(-50%); /* Ajusta para centralizar melhor */
        }
      }

      > a .backButton {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        border: none;
        cursor: pointer;

        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: start;

        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 140%;

        transition: 0.5s;

        &:hover {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
      }

      > img {
        height: 26rem; /* Altura fixa em mobile */
        width: 26rem; /* Largura fixa em mobile */
        object-fit: cover; /* Garante que a imagem preencha o espaço sem distorcer */
        border-radius: 50%; /* Se quiser a imagem redonda */

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
          height: 45rem; /* Aumenta o tamanho da imagem em desktop */
          width: auto; /* Mantém a proporção */
          border-radius: 0; /* Remove borda redonda se não for o design final para desktop */
        }
      }
    }

    > .ingredientsAndDescriptionWrapper {
      display: flex;
      flex-direction: column;
      align-items: center; /* Centraliza conteúdo em mobile */
      justify-content: center;
      width: 100%; /* Ocupa largura total em mobile */

      @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        justify-content: start; /* Alinha ao topo em desktop */
        align-items: flex-start; /* Alinha à esquerda em desktop */
        max-width: 60rem; /* Limita a largura em desktop para melhor leitura */
      }

      > h1,
      p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: "Poppins", sans-serif;
        line-height: 140%;
      }

      > h1 {
        font-size: 2.7rem;
        font-weight: 500;
        white-space: nowrap; /* Evita quebra de linha em mobile para o título */
        margin-bottom: 2.4rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
          font-size: 4rem;
          white-space: normal; /* Permite quebra de linha em desktop */
          text-align: left; /* Alinha o título à esquerda em desktop */
        }
      }

      > p {
        font-size: 1.6rem;
        font-weight: 400;
        text-align: center; /* Centraliza a descrição em mobile */
        margin-bottom: 2.4rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
          font-size: 2.4rem;
          text-align: start; /* Alinha a descrição à esquerda em desktop */
        }
      }

      > .ingredientsWrapper {
        display: flex; /* Transforma em flexbox para os ingredientes */
        flex-wrap: wrap; /* Permite quebrar linha se não houver espaço */
        justify-content: center; /* Centraliza ingredientes em mobile */
        gap: 1.2rem; /* Espaçamento entre ingredientes */
        margin-bottom: 3rem;
        width: 100%; /* Ocupa a largura total */

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
          justify-content: flex-start; /* Alinha ingredientes à esquerda em desktop */
        }
      }

      /* Estilos para os botões de ação (editar ou stepper/incluir) */
      > a,
      > .stepperAndButtonWrapper {
        width: 100%; /* Ocupa a largura total para alinhar */
        display: flex;
        align-items: center;
        justify-content: center; /* Centraliza os botões em mobile */
      }

      > a .editButton {
        /* Estilo específico para o botão de editar (admin) */
        margin-bottom: 8rem; /* Espaçamento antes do footer em mobile */
        max-width: 25rem; /* Limita a largura do botão de editar */

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
          margin: 3rem 0 0 0; /* Remove margem e alinha à esquerda */
          max-width: 20rem; /* Ajuste a largura do botão em desktop */
        }
      }

      > .stepperAndButtonWrapper {
        /* Estilos para o wrapper do stepper e botão (user) */
        flex-direction: column; /* Coluna em mobile */
        margin-top: 2rem;
        gap: 1.6rem;
        max-width: 30rem; /* Limita a largura em mobile para o conjunto stepper/botão */

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
          flex-direction: row; /* Linha em desktop */
          margin-top: 3rem; /* Espaçamento em desktop */
          justify-content: flex-start; /* Alinha à esquerda em desktop */
          max-width: none; /* Remove limite de largura em desktop */
        }

        /* Estilos para o botão dentro do stepperAndButtonWrapper */
        > button {
          width: 100%; /* Ocupa 100% da largura do wrapper em mobile */
          min-width: auto; /* Remove min-width para o botão */
          height: 4.8rem; /* Altura padrão para o botão */
          padding: 1.2rem 2.4rem; /* Padding do botão */

          @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            width: auto; /* Permite que o botão se ajuste ao conteúdo em desktop */
            max-width: 20rem; /* Limita a largura do botão "incluir" em desktop */
          }
        }
      }
    }
  }
`;
