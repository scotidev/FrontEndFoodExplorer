import { Link } from "react-router-dom";
import { PiPencilSimpleBold, PiHeartStraightBold } from "react-icons/pi"; // Importa ambos os ícones

import {
  Container,
  ControlButton,
  Image,
  Title,
  Description,
  Price,
} from "./styles"; // Renomeada Edit/Favorite para ControlButton
import { Stepper } from "../Stepper"; // Certifique-se de que Stepper e Button existam
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
  // Adicionada prop isAdmin
  return (
    <Container {...rest}>
      <div className="card">
        {/* Botão de controle condicional (Edição para Admin, Favorito para Usuário) */}
        {isAdmin ? (
          <Link to={`/editDish/${id}`}>
            <ControlButton className="edit-button">
              <PiPencilSimpleBold />
            </ControlButton>
          </Link>
        ) : (
          <ControlButton className="favorite-button">
            <PiHeartStraightBold />
          </ControlButton>
        )}

        {/* Link da Imagem e Título */}
        <Link to={isAdmin ? `/dish/${id}` : `/dish/${id}`}>
          <Image>
            <img
              src={image}
              alt={`Foto do prato ${title}`}
              width={88}
              height={88}
            />
          </Image>
        </Link>

        <Title>
          {/* O sufixo ">" é tratado diretamente no Home.jsx para manter o title do card puro */}
          {title}
        </Title>

        <Description>{description}</Description>

        <Price>{`R$ ` + price}</Price>

        {/* Stepper e Botão de Incluir (apenas para Usuário) */}
        {!isAdmin && (
          <div className="stepperAndBtnWrap">
            <Stepper />
            <Button title="incluir" id="addDishBtn" />
          </div>
        )}
      </div>
    </Container>
  );
}
