import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth.jsx";
import { api } from "../../services/api";

import { Container } from "./styles";
import { Button } from "../../components/Button";

import { PiCaretLeftBold, PiUploadSimpleBold } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { HiOutlinePlus } from "react-icons/hi2";

export function NewDish() {
  const { showError, showSuccess } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "newIngredient":
        setNewIngredient(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { name: newIngredient.trim() },
      ]);
      setNewIngredient("");
    }
  };

  const handleRemoveIngredient = (index) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  };

  const handleCreateDish = async (e) => {
    e.preventDefault();

    const validations = [
      {
        condition: !title.trim(),
        message: "Por favor, insira o nome do prato.",
      },
      {
        condition:
          !category.trim() || !["food", "dessert", "drink"].includes(category),
        message: "Por favor, selecione uma categoria válida.",
      },
      {
        condition: !description.trim(),
        message: "Por favor, insira a descrição do prato.",
      },
      {
        condition: !price.trim() || isNaN(price) || Number(price) <= 0,
        message: "Por favor, insira um preço válido e maior que zero.",
      },
      {
        condition: !image,
        message: "Por favor, selecione uma imagem para o prato.",
      },
      {
        condition: ingredients.length === 0,
        message: "Por favor, adicione pelo menos um ingrediente.",
      },
    ];

    for (const validation of validations) {
      if (validation.condition) {
        showError(validation.message);
        return;
      }
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);
      ingredients.forEach((ingredient) => {
        formData.append("ingredients", ingredient.name);
      });

      await api.post("/adminDishes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
      <form>
        <Link to="/">
          <button className="backButton">
            <PiCaretLeftBold />
            voltar
          </button>
        </Link>

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
              value={title}
              onChange={handleInputChange}
              placeholder="Ex: Salada Ceasar"
            />
          </div>

          <div className="categoryContainer">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="category"
              value={category}
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
              {ingredients.map((ingredient, index) => (
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
                  onChange={handleInputChange}
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
              value={price}
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
              value={description}
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
