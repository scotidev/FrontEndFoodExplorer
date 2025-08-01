import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import { Container, Menu, Searchbar, SignOut, Orders } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { SearchInput } from "../SearchInput";
import { OrderButton } from "../OrderButton";

import { PiListBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";
import { PiReceipt } from "react-icons/pi";

export function Header() {
  const { signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container $isAdmin={isAdmin}>
      <Link to={"/menu"} className="menuButton">
        <Menu>
          <PiListBold />
        </Menu>
      </Link>

      <Link to={"/"} className="logoButton">
        <Logo />
        {isAdmin && <span>admin</span>}
      </Link>

      <div className="desktopWrapper">
        <Searchbar>
          <SearchInput placeholder="Busque por pratos ou ingredientes" />
        </Searchbar>

        {isAdmin && (
          <Link to="/newDish" className="newDishButton">
            <Button title={"Novo prato"} />
          </Link>
        )}

        {!isAdmin && (
          <>
            <Orders>
              <PiReceipt />
              <span>0</span>
            </Orders>

            <OrderButton title={"Pedidos (0)"} />
          </>
        )}

        <SignOut onClick={handleSignOut}>
          <PiSignOutBold />
        </SignOut>
      </div>
    </Container>
  );
}
