import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth"; // Importar useAuth para verificar o papel do usuário

import { Container } from "./styles";
import { SearchInput } from "../../components/SearchInput";
import { Footer } from "../../components/Footer";

import { PiX, PiMagnifyingGlass } from "react-icons/pi";

export function Menu() {
  const { signOut, user } = useAuth(); // Obter signOut e as informações do usuário
  const navigate = useNavigate();

  // Determina se o usuário é administrador
  const isAdmin = user && user.role === "admin";

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <div className="header">
        <Link to="/">
          <button>
            <PiX />
          </button>
        </Link>
        <span>Menu</span>
      </div>

      <div className="content">
        <SearchInput
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlass}
          id="search"
        />

        {/* Renderização condicional para o link "Novo Prato" */}
        {isAdmin && (
          <div className="menu-item-wrapper">
            {" "}
            {/* Usar uma classe mais genérica para ambos os itens de menu */}
            <Link to="/newDish">
              <button>Novo Prato</button>
            </Link>
          </div>
        )}

        <div className="menu-item-wrapper">
          {" "}
          {/* Reutiliza a classe para o botão Sair */}
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
