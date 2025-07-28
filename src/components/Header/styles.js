import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  width: 100%;
  height: 9rem;
  padding: 2.4rem 0 0 0; /* Padding superior para mobile */

  display: flex;
  align-items: center; /* Centraliza itens verticalmente em mobile */
  justify-content: space-around; /* Distribui itens para mobile */
  /* Em mobile, HeaderUser tinha justify-content: space-around;
       HeaderAdmin tinha justify-content: center; Vamos usar space-around para começar. */

  position: fixed;
  top: 0;
  z-index: 2;

  /* Estilos para Desktop (min-width: Mobile) */
  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    padding: 2.4rem 8rem; /* Padding horizontal maior para desktop */
    gap: 3.2rem; /* Espaçamento entre os itens no desktop */
    justify-content: space-between; /* Distribui itens para desktop, empurrando para as extremidades */
  }

  /* Estilos para o Logo + Badge "admin" */
  > .LogoWrap {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.CAKE_200}; /* Cor do "admin" badge */

    display: flex;
    align-items: center;
    justify-content: center; /* Centraliza logo e badge no mobile */

    padding: 0 0 0.8rem 0.8rem; /* Padding para mobile, ajustar se necessário */
    gap: 1rem;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;

    /* Estilos específicos para o LogoWrap no Desktop */
    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      display: block; /* Volta a ser block para o layout desktop */
      width: 14rem; /* Largura definida para o LogoWrap no desktop */
      height: 4rem; /* Altura definida para o LogoWrap no desktop */
      margin: 0 0 1.3rem 0; /* Ajusta a margem para alinhamento no desktop */
      box-sizing: content-box;
      text-align: end; /* Alinha o texto "admin" à direita do logo */
      color: ${({ theme }) =>
        theme.COLORS.CAKE_200}; /* Garante a cor do "admin" */
    }
  }

  /* Estilo para links genéricos (ex: "Novo prato" para admin) */
  > a {
    display: none; /* Esconde por padrão em mobile */

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      display: inline-block; /* Mostra em desktop */
      margin-bottom: 2rem; /* Margem para alinhar com outros itens */
      white-space: nowrap;
    }
  }

  /* Estilo para o botão de SignOut (ambos users) */
  > #signOutButton {
    display: none; /* Esconde em mobile */

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      display: flex; /* Mostra em desktop */
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3.2rem;
      margin-right: 0; /* Remove a margem rígida para usar o gap do container */
      margin-bottom: 1.5rem; /* Margem para alinhar */
      padding: 0; /* Remover padding padrão de botão */
      border: none;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;

/* Estilos para o botão de Menu (hambúrguer) - APENAS MOBILE */
export const Menu = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 3rem;

  position: absolute; /* Posiciona o ícone do menu no canto esquerdo */
  left: 2.5rem;
  top: 3.9rem;
  border: none; /* Garante que não tenha borda */
  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: none; /* Esconde em desktop */
  }
`;

/* Estilos para o ícone de Pedidos (carrinho) - APENAS MOBILE */
export const Orders = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 3rem;
  position: relative; /* Para posicionar o contador de itens */
  border: none; /* Garante que não tenha borda */
  cursor: pointer;

  > span {
    /* Estilo para o contador de pedidos */
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    width: 2rem;
    height: 2rem;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -5px;
    cursor: pointer;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: none; /* Esconde em desktop */
  }
`;

/* Estilos para a Searchbar (Input de Busca) */
export const Searchbar = styled.div`
  display: none; /* Esconde em mobile por padrão */

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: flex; /* Mostra em desktop */
    flex: 1; /* Ocupa o espaço restante disponível */
    max-width: 58rem; /* Largura máxima para a searchbar no desktop */
    height: 4.8rem;
    margin-bottom: 2rem; /* Margem para alinhar */
    border-radius: 5px;
    background-color: ${({ theme }) =>
      theme.COLORS.DARK_900}; /* Fundo da searchbar */
  }
`;
