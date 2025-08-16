import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import { useCart } from "../../hooks/cart";

import { Container } from "./styles";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Stepper } from "../../components/Stepper";

export function DishDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const { showError, showSuccess } = useToast();
  const { handleAddItem } = useCart();

  const isAdmin = user && user.role === "admin";

  const [quantity, setQuantity] = useState(1);
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

  const handleAddDishToCart = async () => {
    try {
      await handleAddItem(id, quantity);
      showSuccess("Prato adicionado ao carrinho!");
    } catch (error) {
      showError("Não foi possível adicionar o prato ao carrinho.");
    }
  };

  return (
    <Container>
      <BackButton />

      <div className="content">
        {dishData.image && (
          <img
            src={`${api.defaults.baseURL}/files/${dishData.image}`}
            alt={dishData.title}
          />
        )}

        <div className="informationContainer">
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
              <Stepper quantity={quantity} setQuantity={setQuantity} />
              <Button
                title={
                  `incluir - R$` +
                  Number(dishData.price).toFixed(2).replace(".", ",")
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
