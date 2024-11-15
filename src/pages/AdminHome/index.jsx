import React, { useEffect, useState, useRef } from 'react';
import { Container } from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';
import { motion } from 'framer-motion';
import { CardsAdmin } from '../../components/CardsAdmin';
import homeImg from '../../assets/images/homeImage.svg';

export function AdminHome() {
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
                const response = await api.get('/dishes');
                if (Array.isArray(response.data)) {
                    const allDishes = response.data;
                    setDishes(allDishes.filter(dish => dish.category === 'food'));
                    setDeserts(allDishes.filter(dish => dish.category === 'dessert'));
                    setDrinks(allDishes.filter(dish => dish.category === 'drink'));
                } else {
                    setDishes([]);
                    setDeserts([]);
                    setDrinks([]);
                }
            } catch (error) {
                setDishes([]);
                setDeserts([]);
                setDrinks([]);
            }
        };

        fetchDishes();
    }, []);

    return (
        <Container>
            <HeaderAdmin />
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
                        <CardsAdmin 
                            key={dish.id}
                            id={dish.id}
                            image={`${api.defaults.baseURL}/files/${dish.image}`}
                            title={dish.title}
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
                        <CardsAdmin 
                            key={dish.id}
                            id={dish.id}
                            image={`${api.defaults.baseURL}/files/${dish.image}`}
                            title={dish.title}
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
                        <CardsAdmin 
                            key={dish.id}
                            id={dish.id}
                            image={`${api.defaults.baseURL}/files/${dish.image}`}
                            title={dish.title}
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