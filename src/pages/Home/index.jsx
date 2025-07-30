import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";
import { Header } from "../../components/Header"; // Importa o novo Header unificado
import { Cards } from "../../components/Cards"; // Importa o novo Cards unificado
import { Footer } from "../../components/Footer";

import homeImg from "../../assets/images/homeImage.svg";

export function Home() {
  const { user } = useAuth();
  const isAdmin = user && user.role === "admin";

  const [dishes, setDishes] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const carouselFood = useRef();
  const carouselDessert = useRef();
  const carouselDrink = useRef();

  const [widthFood, setWidthFood] = useState(0);
  const [widthDessert, setWidthDessert] = useState(0);
  const [widthDrink, setWidthDrink] = useState(0);

  // Efeito para calcular a largura dos carrosséis
  useEffect(() => {
    const updateCarouselWidths = () => {
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
    };

    updateCarouselWidths(); // Chamada inicial
    // Adiciona listener para recalcular em redimensionamento de janela
    window.addEventListener("resize", updateCarouselWidths);
    return () => window.removeEventListener("resize", updateCarouselWidths); // Limpeza
  }, [dishes, desserts, drinks]); // Recalcula quando os pratos são carregados ou janela redimensionada

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

  return (
    <Container>
      <Header />
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
              <Cards // Renderiza o novo Cards unificado
                key={dish.id}
                id={dish.id}
                image={`${api.defaults.baseURL}/files/${dish.image}`}
                title={dish.title}
                description={dish.description}
                price={dish.price}
                isAdmin={isAdmin} // Passa a prop isAdmin para o componente Cards
              />
            ))}
          </motion.div>
        </motion.section>
      ))}
      <Footer />
    </Container>
  );
}
