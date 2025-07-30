import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  /* Valores unificados para min-width e min-height */
  min-width: 21rem; /* Um pouco maior para acomodar ambos os layouts */
  min-height: 29rem; /* Um pouco maior para acomodar ambos os layouts */
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  position: relative;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    width: 30.4rem;
    /* height ajustado para ser mais flexível se o conteúdo variar */
    height: auto;
    min-height: 48rem; /* Garante altura mínima para desktop */
    padding: 1rem 2.4rem; /* Padding ajustado para desktop */
  }

  > .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 3.8rem 0 2.4rem 0; /* Padding da parte interna do card */

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      gap: 1.5rem;
      padding: 3.8rem 0 2.4rem 0; /* Ajuste de padding para desktop */
    }

    > .stepperAndBtnWrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      width: 100%;

      @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        flex-direction: row;
      }

      > #addDishBtn {
        height: 3.2rem;
        padding: 0;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
          width: 9.2rem;
          height: 4.8rem;
          padding: 1.2rem 2.4rem;
        }
      }
    }
  }
`;

export const ControlButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 2.4rem;
  border: none;
  cursor: pointer;

  /* Estilos específicos para o hover, se desejar */
  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Image = styled.div`
  > img {
    border-radius: 99px;
    width: 8.8rem; /* Tamanho padrão para mobile */
    height: 8.8rem; /* Tamanho padrão para mobile */
    object-fit: cover; /* Garante que a imagem preencha o espaço */

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      width: 17.6rem;
      height: 17.6rem; /* Mantenha a proporção circular */
    }
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  white-space: nowrap; /* Evita que o título quebre linha */
  overflow: hidden; /* Esconde o texto que ultrapassar */
  text-overflow: ellipsis; /* Adiciona "..." ao final do texto cortado */
  max-width: 100%; /* Garante que o título não ultrapasse o card */

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const Description = styled.p`
  display: none; /* Esconde por padrão no mobile */

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: block; /* Exibe no desktop */
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    /* Adiciona ellipsis para descrição longa */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limita a 2 linhas */
    -webkit-box-orient: vertical;
    max-height: 2.8rem * 2; /* Aproximadamente 2 linhas de 1.4rem */
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    height: 5.2rem;
    font-size: 3.2rem;
    line-height: 160%;
  }
`;
