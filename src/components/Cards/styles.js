import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  min-width: 21rem; /* Largura mínima para mobile baseada no CardsUser */
  min-height: 29rem; /* Altura mínima para mobile baseada no CardsUser */
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  position: relative; /* Para posicionar o TopButton */

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    width: 30.4rem;
    height: 48rem; /* Altura ajustada para desktop, baseada no CardsUser */
    padding: 1rem 2.4rem; /* Padding ajustado para desktop */
  }

  > .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    /* Padding no card para mobile, se necessário para espaçamento */
    padding-top: 3.8rem; /* Espaço para o botão superior */
    padding-bottom: 2.4rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      gap: 1.5rem;
      /* Já tem padding no container para desktop, remover aqui se redundante */
      padding: 3.8rem 0 2.4rem 0; /* Manter padding interno no card */
    }
  }
`;

export const TopButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300}; /* Cor padrão para o ícone */
  border: none;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 2.4rem;
  transition: color 0.2s ease-in-out; /* Transição para o hover */

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; /* Cor no hover */
  }

  &.PiHeartStraightBold {
    /* Se você quiser uma cor diferente para o coração */
    color: ${({ theme }) =>
      theme.COLORS.CAKE_100}; /* Exemplo: Cor para o ícone de coração */
  }
`;

export const Image = styled.div`
  > img {
    border-radius: 99px;
    /* Largura e altura fixas em mobile, definidas no JSX: width={88} height={88} */

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      width: 17.6rem;
      height: auto; /* Mantém a proporção */
    }
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  white-space: nowrap; /* Evita quebra de linha em mobile */
  overflow: hidden; /* Esconde texto que excede a largura */
  text-overflow: ellipsis; /* Adiciona '...' para texto oculto */

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const Description = styled.p`
  display: none; /* Esconde a descrição em mobile */

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: block; /* Mostra a descrição em desktop */
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    /* Adicionar max-height e overflow se a descrição for muito longa */
    max-height: 5rem; /* Exemplo: limitar altura para descrições longas */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal; /* Permite quebra de linha para a descrição */
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    height: 5.2rem; /* Altura para alinhar com Stepper e Button */
    font-size: 3.2rem;
    line-height: 160%;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column; /* Coluna em mobile */
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 100%; /* Ocupa a largura total do card */

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    flex-direction: row; /* Linha em desktop */
    /* Ajustar width ou flex-basis se necessário para controle total */
    /* gap: 3rem; ou outro gap para alinhar com o design */
  }

  /* Estilo específico para o botão de "incluir" dentro das ações */
  > button {
    /* Seletor para o componente Button */
    height: 3.2rem; /* Altura para mobile */
    padding: 0; /* Remover padding padrão se o Button já o tiver */
    font-size: 1.2rem; /* Ajustar tamanho da fonte do botão "incluir" */
    width: 100%; /* Ocupa 100% da largura em mobile */

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      width: 9.2rem; /* Largura específica para desktop */
      height: 4.8rem;
      padding: 1.2rem 2.4rem;
      font-size: 1.4rem;
    }
  }
`;
