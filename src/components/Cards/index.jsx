import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"; // Importar useAuth para verificar o papel do usuário

import { Stepper } from "../Stepper";
import { Button } from "../Button";

import { PiPencilSimpleBold, PiHeartStraightBold } from "react-icons/pi"; // Importe ambos os ícones
import {
  Container,
  TopButton,
  Image,
  Title,
  Description,
  Price,
  Actions,
} from "./styles"; // Ajustar importações de estilos

export function DishCard({ id, image, title, description, price, ...rest }) {
  const { user } = useAuth(); // Obter informações do usuário
  const isAdmin = user && user.role === "admin"; // Verificar se é admin

  // Função a ser chamada quando o botão "incluir" for clicado
  // Você precisará implementar a lógica de adicionar ao carrinho aqui ou passá-la via prop
  const handleAddDishToCart = () => {
    // Lógica para adicionar o prato ao carrinho
    // Por exemplo: addToCart(id, quantity)
    alert(`Prato "${title}" adicionado ao carrinho! (ID: ${id})`);
  };

  return (
    <Container {...rest}>
      <div className="card">
        {/* Botão de Editar (Admin) ou Favoritar (User) */}
        <TopButton
          as={Link}
          to={isAdmin ? `/editDish/${id}` : "#"}
          onClick={!isAdmin ? () => alert("Adicionar aos favoritos!") : null}
        >
          {isAdmin ? <PiPencilSimpleBold /> : <PiHeartStraightBold />}
        </TopButton>

        {/* Link da Imagem e Título para a página de detalhes do prato */}
        <Link to={isAdmin ? `/adminDish/${id}` : `/dish/${id}`}>
          <Image>
            <img
              src={image}
              alt={`Foto do prato ${title}`}
              width={88}
              height={88}
            />
          </Image>
          <Title>{title}</Title>
        </Link>

        {/* Descrição - Visível apenas em Desktop */}
        <Description>{description}</Description>

        {/* Preço */}
        <Price>{`R$ ` + price}</Price>

        {/* Ações (Stepper e Botão) - Visível apenas para Usuário e em Desktop */}
        {!isAdmin && (
          <Actions>
            {" "}
            {/* Usar um componente de estilo para envolver Stepper e Button */}
            <Stepper />
            <Button title="incluir" onClick={handleAddDishToCart} />
          </Actions>
        )}
      </div>
    </Container>
  );
}
