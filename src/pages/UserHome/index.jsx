import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { api } from '../../services/api'

import { Container } from './styles'
import { HeaderUser } from '../../components/HeaderUser'
import { Footer } from '../../components/Footer'
import { CardsUser } from '../../components/CardsUser'

import homeImg from '../../assets/images/homeImage.svg'

export function UserHome() {
    const [dishes, setDishes] = useState([])
    const [desserts, setDesserts] = useState([])
    const [drinks, setDrinks] = useState([])
    const carouselFood = useRef()
    const carouselDessert = useRef()
    const carouselDrink = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carouselFood.current?.scrollWidth - carouselFood.current?.offsetWidth)
    }, [])

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await api.get('/dishes')
                if (Array.isArray(response.data)) {
                    const allDishes = response.data
                    setDishes(allDishes.filter(dish => dish.category === 'food'))
                    setDesserts(allDishes.filter(dish => dish.category === 'dessert'))
                    setDrinks(allDishes.filter(dish => dish.category === 'drink'))
                } else {
                    console.error('Response:', response.data)
                    setDishes([])
                    setDesserts([])
                    setDrinks([])
                }
            } catch (error) {
                console.error('Erro:', error)
                setDishes([])
                setDesserts([])
                setDrinks([])
            }
        }

        fetchDishes()
    }, [])

    return (
        <Container>
            <HeaderUser></HeaderUser>

            <div className='banner' 
                style={{backgroundImage: 'linear-gradient(180deg, #091E26 0%, #00131C 100%)'}}>
                <img src={homeImg} alt="Imagem de folhas e macarons" />
                <div className="titleAndTextWrapper">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </div>
                            
            <motion.section 
            whileTap={{ cursor: "grabbing"}}
            ref={carouselFood}
            >
                <h2>Refeições</h2>

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
                        image={`${api.defaults.baseURL}/files/${dish.image}`}
                        title={`${dish.title} >`}
                        description={dish.description}
                        price={dish.price}
                        ></CardsUser>
                    ))}
                </motion.div>

            </motion.section>
                
            <motion.section 
            whileTap={{ cursor: "grabbing"}}
            ref={carouselDessert}
            >

                <h2>Sobremesas</h2>

                <motion.div 
                className="cardsWrapper"
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
                >
                    {desserts.map(dish => (
                        <CardsUser 
                        key={dish.id}
                        id={dish.id}
                        image={`${api.defaults.baseURL}/files/${dish.image}`}
                        title={`${dish.title} >`}
                        description={dish.description}
                        price={dish.price}
                        ></CardsUser>
                    ))}
                </motion.div>

            </motion.section>
                
            <motion.section 
            whileTap={{ cursor: "grabbing"}}
            ref={carouselDrink}
            >

                <h2>Bebidas</h2>

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
                        image={`${api.defaults.baseURL}/files/${dish.image}`}
                        title={`${dish.title} >`}
                        description={dish.description}
                        price={dish.price}
                        ></CardsUser>
                    ))}
                </motion.div>

            </motion.section>

            <Footer />
        </Container>
    )
}