import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container } from "./styles";
import { Favorite } from "../../components/Favorite";

import { ImFileEmpty } from "react-icons/im";
import { PiCaretLeftBold } from "react-icons/pi";

export function Favorites() {
  const { showError, showSuccess } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get("/favorites");
        setFavorites(response.data);
      } catch (err) {
        showError("Não foi possível carregar os favoritos.");
      }
    }
    fetchFavorites();
  }, [showError, showSuccess]);

  async function handleRemoveFavorite(dishId) {
    try {
      const response = await api.post("/favorites", { dish_id: dishId });

      showSuccess(response.data.message);

      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== dishId)
      );
    } catch (err) {
      showError("Não foi possível remover o prato.");
    }
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Link to="/">
        <button className="backButton" onClick={handleGoBack}>
          <PiCaretLeftBold />
          voltar
        </button>
      </Link>

      {favorites.length > 0 ? (
        <div className="favoritesContainer">
          <h1>Meus Favoritos</h1>
          <div className="favoritesList">
            {favorites.map((dish) => (
              <Favorite
                key={String(dish.id)}
                data={dish}
                onRemoveFavorite={handleRemoveFavorite}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="noFavorites">
          <ImFileEmpty />
          <p>Você ainda não tem pratos favoritos.</p>
        </div>
      )}
    </Container>
  );
}
