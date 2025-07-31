import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth"; // Importar hook de autenticação

import { Container } from "./styles";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button"; // Usado para o botão de editar
import { Stepper } from "../../components/Stepper"; // Usado para o stepper do usuário
import { OrderButton } from "../../components/OrderButton"; // Usado para o botão de pedido do usuário

import { PiCaretLeftBold } from "react-icons/pi";

export function DishDetails() {
  const { id } = useParams();
  const { user } = useAuth(); // Obtém o usuário logado e suas informações
  const isAdmin = user && user.role === "admin"; // Verifica se o usuário é admin

  const [dishData, setDishData] = useState({
    title: "",
    description: "",
    ingredients: [],
    image: "",
    price: "", // Adicionado price para UserDish
  });

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await api.get(`/dishes/${id}`);
        setDishData(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do prato:", error);
        alert("Não foi possível carregar os detalhes do prato.");
      }
    };
    fetchDish();
  }, [id]);

  // Função de exemplo para adicionar ao carrinho (para o perfil de usuário)
  const handleAddDishToCart = () => {
    alert(
      `Prato "${dishData.title}" adicionado ao carrinho! Preço: R$${dishData.price}`
    );
    // Aqui você integraria a lógica real de adicionar ao carrinho
  };

  return (
    <Container>
      {/* Renderiza o cabeçalho condicionalmente */}
      <div className="content">
        <div className="backAndImageWrapper">
          <Link to="/">
            <button className="backButton">
              <PiCaretLeftBold />
              voltar
            </button>
          </Link>

          {dishData.image && (
            <img
              src={`${api.defaults.baseURL}/files/${dishData.image}`}
              alt={dishData.title}
              height={260}
              width={260}
            />
          )}
        </div>

        <div className="ingredientsAndDescriptionWrapper">
          <h1>{dishData.title}</h1>
          <p>{dishData.description}</p>

          <div className="ingredientsWrapper">
            {dishData.ingredients.map((ingredient) => (
              <Ingredient
                key={ingredient.id || ingredient.name}
                title={ingredient.name}
              />
            ))}
          </div>

          {/* Renderiza ações baseadas no perfil do usuário */}
          {isAdmin ? (
            <Link to={`/editDish/${id}`}>
              <Button title={"Editar Prato"} className="editButton" />
            </Link>
          ) : (
            <div className="stepperAndButtonWrapper">
              <Stepper />
              <OrderButton
                title={`Incluir - R$${dishData.price}`}
                onClick={handleAddDishToCart}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
