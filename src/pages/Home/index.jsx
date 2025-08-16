import { useEffect, useState, useRef } from "react";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import { Container } from "./styles";
import { Cards } from "../../components/Cards";

import homeImg from "../../assets/images/homeImage.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function Home() {
  const { user } = useAuth();
  const { showError, showSuccess } = useToast();
  const isAdmin = user && user.role === "admin";

  const [dishes, setDishes] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [favoriteDishIds, setFavoriteDishIds] = useState([]);

  const carouselFoodRef = useRef(null);
  const carouselDessertRef = useRef(null);
  const carouselDrinkRef = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const fetchHomeData = async () => {
    try {
      const fetchPromises = [api.get("/dishes")];
      if (!isAdmin) {
        fetchPromises.push(api.get("/favorites"));
      }

      const responses = await Promise.all(fetchPromises);
      const allDishes = responses[0].data;
      let favoriteIds = [];

      if (!isAdmin) {
        const favoritesResponse = responses[1];
        favoriteIds = favoritesResponse.data.map((fav) => fav.id);
      }

      if (Array.isArray(allDishes)) {
        setFavoriteDishIds(favoriteIds);
        setDishes(allDishes.filter((dish) => dish.category === "food"));
        setDesserts(allDishes.filter((dish) => dish.category === "dessert"));
        setDrinks(allDishes.filter((dish) => dish.category === "drink"));
      } else {
        showError("Resposta inesperada do servidor.");
      }
    } catch (error) {
      showError("Erro ao buscar pratos.");
      console.error(error);
    }
  };

  const handleFavoriteToggle = async (dish_id) => {
    try {
      const response = await api.post("/favorites", { dish_id });
      const { message, status } = response.data;

      if (status === "added") {
        showSuccess(message);
        setFavoriteDishIds((prevIds) => [...prevIds, dish_id]);
      } else if (status === "removed") {
        showError(message);
        setFavoriteDishIds((prevIds) => prevIds.filter((id) => id !== dish_id));
      }
    } catch (error) {
      if (error.response) {
        showError(error.response.data.message);
      } else {
        showError("Não foi possível adicionar/remover o prato.");
      }
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, [showError, isAdmin]);

  const sections = [
    { title: "Refeições", data: dishes, ref: carouselFoodRef },
    { title: "Sobremesas", data: desserts, ref: carouselDessertRef },
    { title: "Bebidas", data: drinks, ref: carouselDrinkRef },
  ];

  return (
    <Container>
      <div className="banner">
        <img src={homeImg} alt="Imagem de folhas e macarons" />
        <div className="titleAndTextWrapper">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>

      {sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <div className="carouselWrapper">
            <button
              className="carouselButton left"
              onClick={() => scrollLeft(section.ref)}
            >
              <IoIosArrowBack />
            </button>
            <div className="fadeEffect left"></div>
            <div className="carouselContent" ref={section.ref}>
              {section.data.map((dish) => (
                <Cards
                  key={String(dish.id)}
                  id={dish.id}
                  image={`${api.defaults.baseURL}/files/${dish.image}`}
                  title={dish.title}
                  description={dish.description}
                  price={dish.price}
                  isAdmin={isAdmin}
                  isFavorite={favoriteDishIds.includes(dish.id)}
                  onFavoriteToggle={handleFavoriteToggle}
                />
              ))}
            </div>
            <div className="fadeEffect right"></div>
            <button
              className="carouselButton right"
              onClick={() => scrollRight(section.ref)}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </section>
      ))}
    </Container>
  );
}
