import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Container } from './styles'
import { HeaderUser } from '../../components/HeaderUser'
import { Ingredient } from '../../components/Ingredient'
import { Stepper } from '../../components/Stepper'
import { OrderButton } from '../../components/OrderButton'
import { Footer } from '../../components/Footer'

import { PiCaretLeftBold } from "react-icons/pi"

export function UserDish() {
    const { id } = useParams();
    const [dishData, setDishData] = useState({
        title: '',
        description: '',
        ingredients: [],
        image: '',
        price: ''
    })

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const response = await api.get(`/dishes/${id}`)
                const dish = response.data
                setDishData(dish)
            } catch (error) {
                console.error('Erro:', error)
            }
        }
        fetchDish()
    }, [id])

    return (
        <Container>
            <HeaderUser />

            <div className="content">
                <div className="backAndImageWrapper">
                    <Link to="/">
                        <button className="backButton">
                            <PiCaretLeftBold />
                            voltar
                        </button>
                    </Link>

                    {dishData.image && (
                        <>
                            <img src={`${api.defaults.baseURL}/files/${dishData.image}`} alt={dishData.title} height={260} width={260} />
                        </>
                    )}
                </div>

                <div className="ingredientsAndDescriptionWrapper">
                    <h1>{dishData.title}</h1>
                    <p>{dishData.description}</p>

                    <div className="ingredientsWrapper">
                        {dishData.ingredients.map((ingredient, index) => (
                            <Ingredient key={index} title={ingredient.name} />
                        ))}
                    </div>
                    
                    <div className="stepperAndButtonWrapper">
                        <Stepper />
                        <OrderButton title={`Incluir - R$${dishData.price}`}/>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    );
}