import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth"; // Importar hook de autenticação

import { Container } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { HeaderUser } from "../../components/HeaderUser";
import { CardsAdmin } from "../../components/CardsAdmin"; // Componente de cartão para admin
import { CardsUser } from "../../components/CardsUser"; // Componente de cartão para usuário
import { Footer } from "../../components/Footer";

import homeImg from "../../assets/images/homeImage.svg";

export function Home() {
  const { user } = useAuth(); // Obtém o usuário logado e suas informações
  const isAdmin = user && user.role === "admin"; // Verifica se o usuário é admin

  const [dishes, setDishes] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Refs para os carrosséis
  const carouselFood = useRef();
  const carouselDessert = useRef();
  const carouselDrink = useRef();

  // Estado para controlar a largura de arrasto do carrossel
  const [widthFood, setWidthFood] = useState(0);
  const [widthDessert, setWidthDessert] = useState(0);
  const [widthDrink, setWidthDrink] = useState(0);

  // Efeito para calcular a largura dos carrosséis
  useEffect(() => {
    // Verifica se os refs existem antes de acessar suas propriedades
    if (carouselFood.current) {
      setWidthFood(
        carouselFood.current.scrollWidth - carouselFood.current.offsetWidth
      );
    }
    if (carouselDessert.current) {
      setWidthDessert(
        carouselDessert.current.scrollWidth -
          carouselDessert.current.offsetWidth
      );
    }
    if (carouselDrink.current) {
      setWidthDrink(
        carouselDrink.current.scrollWidth - carouselDrink.current.offsetWidth
      );
    }
  }, [dishes, desserts, drinks]); // Recalcula quando os pratos são carregados

  // Efeito para buscar os pratos da API
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await api.get("/dishes");
        if (Array.isArray(response.data)) {
          const allDishes = response.data;
          setDishes(allDishes.filter((dish) => dish.category === "food"));
          setDesserts(allDishes.filter((dish) => dish.category === "dessert"));
          setDrinks(allDishes.filter((dish) => dish.category === "drink"));
        } else {
          console.error("Resposta inesperada da API:", response.data);
          setDishes([]);
          setDesserts([]);
          setDrinks([]);
        }
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
        setDishes([]);
        setDesserts([]);
        setDrinks([]);
      }
    };

    fetchDishes();
  }, []);

  // Componente de Cartão a ser renderizado condicionalmente
  const CardComponent = isAdmin ? CardsAdmin : CardsUser;

  return (
    <Container>
      {isAdmin ? <HeaderAdmin /> : <HeaderUser />}{" "}
      {/* Renderiza o cabeçalho condicionalmente */}
      <div
        className="banner"
        style={{
          backgroundImage: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
        }}
      >
        <img src={homeImg} alt="Imagem de folhas e macarons" />
        <div className="titleAndTextWrapper">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
      {/* Seções de Refeições, Sobremesas e Bebidas */}
      {[
        {
          title: "Refeições",
          data: dishes,
          ref: carouselFood,
          width: widthFood,
        },
        {
          title: "Sobremesas",
          data: desserts,
          ref: carouselDessert,
          width: widthDessert,
        },
        {
          title: "Bebidas",
          data: drinks,
          ref: carouselDrink,
          width: widthDrink,
        },
      ].map((section, index) => (
        <motion.section
          key={index}
          whileTap={{ cursor: "grabbing" }}
          ref={section.ref}
        >
          <h2>{section.title}</h2>
          <motion.div
            className="cardsWrapper"
            drag="x"
            dragConstraints={{ right: 0, left: -section.width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {section.data.map((dish) => (
              <CardComponent
                key={dish.id}
                id={dish.id}
                image={`${api.defaults.baseURL}/files/${dish.image}`}
                // Adiciona ">" apenas para CardsUser, se for o caso
                title={isAdmin ? dish.title : `${dish.title} >`}
                description={dish.description}
                price={dish.price}
              />
            ))}
          </motion.div>
        </motion.section>
      ))}
      <Footer />
    </Container>
  );
}
