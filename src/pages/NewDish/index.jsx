import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth.jsx";
import { api } from "../../services/api";

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

import { PiUploadSimpleBold } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { HiOutlinePlus } from "react-icons/hi2";

export function NewDish() {
  const { showError, showSuccess } = useAuth();
  const navigate = useNavigate();

  const [dishData, setDishData] = useState({
    title: "",
    category: "",
    ingredients: [],
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [newIngredient, setNewIngredient] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDishData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setDishData((prevData) => ({
        ...prevData,
        ingredients: [...prevData.ingredients, { name: newIngredient.trim() }],
      }));
      setNewIngredient("");
    }
  };

  const handleRemoveIngredient = (index) => {
    setDishData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.filter((_, i) => i !== index),
    }));
  };

  const handleCreateDish = async (e) => {
    e.preventDefault();

    if (!dishData.title.trim()) {
      return showError("Por favor, insira o nome do prato.");
    }
    if (!dishData.category.trim()) {
      return showError("Por favor, selecione uma categoria.");
    }
    if (!dishData.description.trim()) {
      return showError("Por favor, insira a descrição do prato.");
    }
    if (
      !dishData.price.trim() ||
      isNaN(dishData.price) ||
      Number(dishData.price) <= 0
    ) {
      return showError("Por favor, insira um preço válido e maior que zero.");
    }
    if (!image) {
      return showError("Por favor, selecione uma imagem para o prato.");
    }
    if (dishData.ingredients.length === 0) {
      return showError("Por favor, adicione pelo menos um ingrediente.");
    }

    try {
      const formData = new FormData();
      formData.append("title", dishData.title);
      formData.append("category", dishData.category);
      formData.append("description", dishData.description);
      formData.append("price", dishData.price);
      formData.append("image", image);
      dishData.ingredients.forEach((ingredient) => {
        formData.append("ingredients", ingredient.name);
      });

      await api.post("/adminDishes", formData);
      showSuccess("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Erro ao criar prato. Tente novamente.";
      showError(errorMessage);
    }
  };

  return (
    <Container>
      <BackButton />
      <form>
        <h1>Criar novo prato</h1>

        <section className="imageNameAndCategoryWrapper">
          <div className="uploadContainer">
            <h2>Imagem do Prato</h2>
            <input type="file" id="upload" onChange={handleImageChange} />
            <label htmlFor="upload">
              <div className="uploadBox">
                <PiUploadSimpleBold />
                <p>Selecione a imagem</p>
              </div>
            </label>
          </div>

          <div className="nameContainer">
            <label htmlFor="title">Nome do prato</label>
            <input
              type="text"
              id="title"
              name="title"
              value={dishData.title}
              onChange={handleInputChange}
              placeholder="Ex: Salada Ceasar"
            />
          </div>

          <div className="categoryContainer">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="category"
              value={dishData.category}
              onChange={handleInputChange}
            >
              <option value="">Selecione uma categoria</option>
              <option value="food">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
          </div>
        </section>

        <section className="ingredientsAndPriceWrapper">
          <div className="ingredientsContainer">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="ingredientsList">
              {dishData.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredientItem">
                  <span>{ingredient.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                  >
                    <VscClose />
                  </button>
                </div>
              ))}

              <div className="addIngredient">
                <input
                  type="text"
                  id="newIngredient"
                  name="newIngredient"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  placeholder="Adicionar"
                />
                <button type="button" onClick={handleAddIngredient}>
                  <HiOutlinePlus />
                </button>
              </div>
            </div>
          </div>

          <div className="priceContainer">
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              value={dishData.price}
              onChange={handleInputChange}
              placeholder="Ex: 19.90"
            />
          </div>
        </section>

        <section className="descriptionAndSaveButtonWrapper">
          <div className="descriptionContainer">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={dishData.description}
              onChange={handleInputChange}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </div>

          <Button
            title={"Criar prato"}
            type="submit"
            id="saveButton"
            onClick={handleCreateDish}
          />
        </section>
      </form>
    </Container>
  );
}
