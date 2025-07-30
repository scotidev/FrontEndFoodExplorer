import { Link } from "react-router-dom";
import { PiPencilSimpleBold, PiHeartStraightBold } from "react-icons/pi"; // Importa ambos os ícones

import {
  Container,
  EditButton,
  Image,
  Title,
  Description,
  Price,
} from "./styles";
import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function Cards({
  id,
  image,
  title,
  description,
  price,
  isAdmin,
  ...rest
}) {
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
          <EditButton>
            <PiHeartStraightBold />
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
        </Link>

        <Title>{title}</Title>

        <Description>{description}</Description>

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
