import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";
import { Stepper } from "../../components/Stepper";
import { OrderButton } from "../../components/OrderButton";

import { PiCaretLeftBold } from "react-icons/pi";

export function DishDetails() {
  const { id } = useParams();
  const { user, showError, showSuccess } = useAuth();
  const isAdmin = user && user.role === "admin";

  const [dishData, setDishData] = useState({
    title: "",
    description: "",
    ingredients: [],
    image: "",
    price: "",
  });

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await api.get(`/dishes/${id}`);
        setDishData(response.data);
      } catch (error) {
        showError("Não foi possível carregar os detalhes do prato.");
      }
    };
    fetchDish();
  }, [id]);

  const handleAddDishToCart = () => {
    showSuccess(
      `${dishData.title} (R$${dishData.price}) adicionado ao carrinho!`
    );
  };

  return (
    <Container>
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
            />
          )}
        </div>

        <div className="ingredientsAndDescriptionWrapper">
          <h1>{dishData.title}</h1>
          <p>{dishData.description}</p>

          <div className="ingredientsWrapper">
            {dishData.ingredients.map((ingredient) => (
              <Ingredient key={ingredient.id} title={ingredient.name} />
            ))}
          </div>

          {isAdmin ? (
            <Link to={`/editDish/${id}`}>
              <Button title={"Editar Prato"} className="editButton" />
            </Link>
          ) : (
            <div className="stepperAndButtonWrapper">
              <Stepper />
              <OrderButton
                title={
                  `incluir - R$` + String(dishData.price).replace(".", ",")
                }
                onClick={handleAddDishToCart}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
