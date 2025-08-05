import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";
import { SearchInput } from "../../components/SearchInput";
import { Footer } from "../../components/Footer";

import { PiX } from "react-icons/pi";

export function Menu() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user && user.role === "admin";

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <div className="header">
        <Link to="/">
          <button onClick={handleGoBack}>
            <PiX />
          </button>
        </Link>
        <span>Menu</span>
      </div>

      <div className="content">
        <SearchInput />

        {isAdmin && (
          <Link to="/newDish">
            <button>Novo Prato</button>
          </Link>
        )}

        <button onClick={handleSignOut}>Sair</button>
      </div>

      <Footer />
    </Container>
  );
}
