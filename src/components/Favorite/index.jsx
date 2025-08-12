import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from "./styles";

export function Favorite({ data, onRemoveFavorite }) {
  const imageUrl = `${api.defaults.baseURL}/files/${data.image}`;

  return (
    <Container>
      <Link to={`/dish/${data.id}`}>
        <img src={imageUrl} alt={`Prato ${data.title}`} />
      </Link>

      <div className="details">
        <Link to={`/dish/${data.id}`}>
          <h2>{data.title}</h2>
        </Link>
        <button onClick={() => onRemoveFavorite(data.id)}>
          Remover dos Favoritos
        </button>
      </div>
    </Container>
  );
}
