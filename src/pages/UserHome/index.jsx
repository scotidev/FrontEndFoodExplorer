import { Container } from './styles';
import { HeaderUser } from '../../components/HeaderUser';
import { Footer } from '../../components/Footer';
import React, { useEffect, useState, useRef } from 'react';
import { api } from '../../services/api'; // Importa a instância do axios
import { motion } from 'framer-motion';
import { CardsUser } from '../../components/CardsUser';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import homeImg from '../../assets/images/homeImage.svg';

export function UserHome() {
    const [dishes, setDishes] = useState([]);
    const [deserts, setDeserts] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await api.get('/dishes'); // Usa a instância do axios
                // Verifique se a resposta é um array
                if (Array.isArray(response.data)) {
                    const allDishes = response.data;
                    setDishes(allDishes.filter(dish => dish.category === 'food'));
                    setDeserts(allDishes.filter(dish => dish.category === 'dessert'));
                    setDrinks(allDishes.filter(dish => dish.category === 'drink'));
                } else {
                    console.error('Unexpected response format:', response.data);
                    setDishes([]);
                    setDeserts([]);
                    setDrinks([]);
                }
            } catch (error) {
                console.error('Error fetching dishes:', error);
                setDishes([]);
                setDeserts([]);
                setDrinks([]);
            }
        };

        fetchDishes();
    }, []);

    return (
        <Container>
            <HeaderUser />
            <div className='banner' 
                style={{backgroundImage: 'linear-gradient(180deg, #091E26 0%, #00131C 100%)'}}>
                <img src={homeImg} alt="Imagem de folhas e macarons" />
                <div className="titleAndTextWrapper">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </div>

            <h2>Refeições</h2>
            <motion.section 
                whileTap={{ cursor: "grabbing"}}
                ref={carousel}
            >
                <motion.div 
                    className="cardsWrapper"
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {dishes.map(dish => (
                        <CardsUser 
                            key={dish.id}
                            id={dish.id}
                            image={`${api.defaults.baseURL}/files/${dish.image}`} // Construa o caminho completo da imagem
                            title={`${dish.title} >`}
                            description={dish.description}
                            price={dish.price}
                        />
                    ))}
                </motion.div>
            </motion.section>

            <h2>Sobremesas</h2>
            <motion.section 
                whileTap={{ cursor: "grabbing"}}
                ref={carousel}
            >
                <motion.div 
                    className="cardsWrapper"
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {deserts.map(dish => (
                        <CardsUser 
                            key={dish.id}
                            id={dish.id}
                            image={`${api.defaults.baseURL}/files/${dish.image}`} // Construa o caminho completo da imagem
                            title={`${dish.title} >`}
                            description={dish.description}
                            price={dish.price}
                        />
                    ))}
                </motion.div>
            </motion.section>

            <h2>Bebidas</h2>
            <motion.section 
                whileTap={{ cursor: "grabbing"}}
                ref={carousel}
            >
                <motion.div 
                    className="cardsWrapper"
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {drinks.map(dish => (
                        <CardsUser 
                            key={dish.id}
                            id={dish.id}
                            image={`${api.defaults.baseURL}/files/${dish.image}`} // Construa o caminho completo da imagem
                            title={`${dish.title} >`}
                            description={dish.description}
                            price={dish.price}
                        />
                    ))}
                </motion.div>
            </motion.section>

            <Footer />
        </Container>
    );
}