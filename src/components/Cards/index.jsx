import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import {
  PiPencilSimpleBold,
  PiHeartStraightBold,
  PiHeartStraightFill,
} from "react-icons/pi";

import { Container, EditButton, Image, Price } from "./styles";
import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function Cards({
  id,
  image,
  title,
  description,
  price,
  isAdmin,
  isFavorite: initialIsFavorite,
  ...rest
}) {
  const { showSuccess, showError } = useAuth();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  async function handleFavoriteToggle() {
    try {
      const response = await api.post("/favorites", { dish_id: id });
      const { message, status } = response.data;

      if (status === "added") {
        setIsFavorite(true);
        showSuccess(message);
      } else if (status === "removed") {
        setIsFavorite(false);
        showError(message);
      }
    } catch (error) {
      if (error.response) {
        showError(error.response.data.message);
      } else {
        showError("Não foi possível adicionar/remover o prato.");
      }
    }
  }

  return (
    <Container {...rest}>
      <div className="cardWrapper">
        {isAdmin ? (
          <Link to={`/editDish/${id}`}>
            <EditButton>
              <PiPencilSimpleBold />
            </EditButton>
          </Link>
        ) : (
          <EditButton onClick={handleFavoriteToggle}>
            {isFavorite ? <PiHeartStraightFill /> : <PiHeartStraightBold />}
          </EditButton>
        )}

        <Link to={`/dish/${id}`}>
          <Image>
            <img
              src={image}
              alt={`Foto do prato ${title}`}
              width={88}
              height={88}
            />
          </Image>

          <h3>{title}</h3>

          <p>{description}</p>
        </Link>

        <Price>{`R$ ` + String(price).replace(".", ",")}</Price>

        {!isAdmin && (
          <div className="stepperButtonWrapper">
            <Stepper />
            <Button title="incluir" className="addDishButton" />
          </div>
        )}
      </div>
    </Container>
  );
}
