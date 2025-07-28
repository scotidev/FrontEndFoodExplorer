import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import { Container, Menu, Searchbar, SignOut, Orders } from "./styles"; // Importe todos os componentes de estilo necessários
import { Logo } from "../Logo";
import { Button } from "../Button"; // O Button para "Novo prato"
import { OrderButton } from "../OrderButton"; // O OrderButton para "Pedidos"
import { SearchInput } from "../SearchInput";

import { PiListBold, PiSignOutBold, PiReceipt } from "react-icons/pi"; // Importe todos os ícones necessários

export function Header() {
  const { signOut, user } = useAuth(); // Obtenha o usuário do contexto de autenticação
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  const isAdmin = user && user.role === "admin"; // Verifica se o usuário é admin

  return (
    <Container>
      {/* Menu para Mobile - Visível para ambos os usuários */}
      <Link to={isAdmin ? "/adminMenu" : "/menu"}>
        <Menu>
          <PiListBold />
        </Menu>
      </Link>

      {/* Logo e "admin" badge para Admin / Apenas Logo para User */}
      {isAdmin ? (
        <div className="LogoWrap">
          <Logo />
          <span>admin</span>
        </div>
      ) : (
        <Logo />
      )}

      {/* Searchbar - Visível apenas em Desktop */}
      <Searchbar>
        <SearchInput placeholder="Busque por pratos ou ingredientes" />
      </Searchbar>

      {/* Botão "Novo prato" para Admin / Botão "Pedidos" para User - Visível apenas em Desktop */}
      {isAdmin ? (
        <Link to="/newDish">
          <Button title={"Novo prato"} />
        </Link>
      ) : (
        <>
          {/* Pedidos mobile com contador (se você tiver a lógica de contador de itens no carrinho) */}
          <Orders id="OrdersButton">
            <PiReceipt />
            <span>0</span>{" "}
            {/* Substituir '0' pelo contador real de itens no carrinho */}
          </Orders>
          {/* Botão de pedidos desktop */}
          <OrderButton title={"Pedidos (0)"} id="OrdersDesktop" />{" "}
          {/* Substituir '0' pelo contador real */}
        </>
      )}

      {/* Botão de Sair - Visível apenas em Desktop */}
      <SignOut id="signOutButton" onClick={handleSignOut}>
        <PiSignOutBold />
      </SignOut>
    </Container>
  );
}
