import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { Link, useNavigate } from "react-router-dom";

import { Container, Menu, Searchbar, SignOut, Orders } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { SearchInput } from "../SearchInput";
import { CartButton } from "../CartButton";

import { PiListBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";
import { PiReceipt } from "react-icons/pi";

export function Header() {
  const { signOut, isAdmin } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItemsInCart = cart
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

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
          <SearchInput />
        </Searchbar>

        {isAdmin && (
          <Link to="/newDish" className="newDishButton">
            <Button title={"Novo prato"} />
          </Link>
        )}

        {!isAdmin && (
          <>
            <Link to="/cart" className="mobileOrderButton">
              <Orders>
                <PiReceipt />
                <span>{totalItemsInCart}</span>
              </Orders>
            </Link>

            <Link to="/favorites" className="favoritesButton">
              <span>Favoritos</span>
            </Link>

            <CartButton
              title={`Carrinho (${totalItemsInCart})`}
              className="desktopOrderButton"
            />
          </>
        )}

        <SignOut onClick={handleSignOut}>
          <PiSignOutBold />
        </SignOut>
      </div>
    </Container>
  );
}
