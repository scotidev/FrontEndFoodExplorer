import { useState } from "react";
import { Link } from "react-router-dom";

import { useToast } from "../../hooks/toast";
import { useCart } from "../../hooks/cart";

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
  isFavorite,
  onFavoriteToggle,
  ...rest
}) {
  const { showError, showSuccess } = useToast();
  const { handleAddItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  async function handleFavoriteClick() {
    onFavoriteToggle(id);
  }

  async function handleAddToCart() {
    try {
      await handleAddItem(id, quantity);
      showSuccess("Prato adicionado ao carrinho!");
    } catch (error) {
      showError("Não foi possível adicionar o prato ao carrinho.");
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
          <EditButton onClick={handleFavoriteClick}>
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

        <Price>{`R$ ` + Number(price).toFixed(2).replace(".", ",")}</Price>

        {!isAdmin && (
          <div className="stepperButtonWrapper">
            <Stepper quantity={quantity} setQuantity={setQuantity} />
            <Button
              title="incluir"
              className="addDishButton"
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>
    </Container>
  );
}
