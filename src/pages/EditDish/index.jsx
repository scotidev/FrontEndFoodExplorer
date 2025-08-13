import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth.jsx";

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

import { PiUploadSimpleBold } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { HiOutlinePlus } from "react-icons/hi2";

export function EditDish() {
  const { id } = useParams();
  const { showSuccess, showError } = useAuth();
  const navigate = useNavigate();

  const [newIngredient, setNewIngredient] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [dishData, setDishData] = useState({
    id: "",
    title: "",
    category: "",
    ingredients: [],
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await api.get(`/dishes/${id}`);
        const dish = response.data;
        dish.price = dish.price.toString().replace(",", ".");
        setDishData(dish);
      } catch (error) {
        showError("Erro ao buscar prato.");
      }
    };

    fetchDish();
  }, [id, showError]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDishData({ ...dishData, [name]: value });
  };

  const handleIngredientChange = (e) => {
    setNewIngredient(e.target.value);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setDishData({
        ...dishData,
        ingredients: [...dishData.ingredients, { name: newIngredient.trim() }],
      });
      setNewIngredient("");
    }
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = dishData.ingredients.filter(
      (_, i) => i !== index
    );
    setDishData({ ...dishData, ingredients: updatedIngredients });
  };

  const handleUpdate = async () => {
    try {
      const updatedDishData = {
        ...dishData,
        ingredients: dishData.ingredients.map((ingredient) => ingredient.name),
      };

      await api.put(`/adminDishes/${id}`, updatedDishData);

      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage);

        await api.patch(`/adminDishes/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      showSuccess("Prato atualizado com sucesso!");
      navigate("/");
    } catch (error) {
      showError("Erro ao atualizar prato.");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("Tem certeza que deseja excluir este prato?");
    if (confirmDelete) {
      try {
        await api.delete(`/adminDishes/${id}`);
        showSuccess("Prato deletado!");
        navigate("/");
      } catch (error) {
        showError("Erro ao deletar prato.");
      }
    }
  };

  return (
    <Container>
      <BackButton />

      <form>
        <h1>Editar prato</h1>

        <section className="imageNameAndCategoryWrapper">
          <div className="uploadContainer">
            <h2>Imagem do Prato</h2>
            <input
              type="file"
              id="upload"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor="upload">
              <div className="uploadBox">
                <PiUploadSimpleBold />
                <p>Selecione imagem para alterá-la</p>
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
              <option value="food">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebidas</option>
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
                  onChange={handleIngredientChange}
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
              placeholder="Ex: 19,90"
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

          <div className="buttonsContainer">
            <button type="button" id="deleteDish" onClick={handleDelete}>
              Excluir prato
            </button>
            <Button
              title={"Salvar Alterações"}
              id="saveButton"
              onClick={handleUpdate}
            />
          </div>
        </section>
      </form>
    </Container>
  );
}
