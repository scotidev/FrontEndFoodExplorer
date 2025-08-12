import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container } from "./styles";
import { Favorite } from "../../components/Favorite";

export function Favorites() {
  const { showError } = useAuth();
  const [favorites, setFavorites] = useState([]);

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
  }, [showError]);

  async function handleRemoveFavorite(dishId) {
    try {
      const response = await api.post("/favorites", { dish_id: dishId });

      showSuccess(response.data.message);

      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== dishId)
      );
    } catch (err) {
      showError("Não foi possível remover o prato.");
      console.error(err);
    }
  }
  return (
    <Container>
      <h1>Meus Favoritos</h1>

      {favorites.length > 0 ? (
        <div className="favoritesList">
          {favorites.map((dish) => (
            <Favorite
              key={String(dish.id)}
              data={dish}
              onRemoveFavorite={handleRemoveFavorite}
            />
          ))}
        </div>
      ) : (
        <p>Você ainda não tem pratos favoritos.</p>
      )}
    </Container>
  );
}
