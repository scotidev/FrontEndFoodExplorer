import { Link } from "react-router-dom"

import { Container } from './styles'
import { HeaderUser} from '../../components/HeaderUser'
import { Ingredient } from '../../components/Ingredient'
import { Stepper } from '../../components/Stepper'
import { OrderButton } from '../../components/OrderButton'
import { Footer } from '../../components/Footer'

import { PiCaretLeftBold } from "react-icons/pi";

import juice from '../../assets/images/juice.png'


export function UserDish() {
    return(
        <Container>
            <HeaderUser></HeaderUser>

            <div className="content">

                <div className="backAndImageWrapper">
                    <Link to="/">
                        <button className="back">
                            <PiCaretLeftBold />
                            voltar
                        </button>
                    </Link>

                    <img src={juice} alt=""  height={260} width={260}/>
                </div>

                <div className="ingredientsAndDescriptionWrapper">
                    <h1>Salada de Salada</h1>
                    <p>Salada salada salada salada salada salada salada salada salada salada salada salada.</p>

                    <div className="ingredientsWrapper">
                        <Ingredient title={'alface'} />
                        <Ingredient title={'requeijão'} />
                        <Ingredient title={'cebola'} />
                        <Ingredient title={'cebolinha'} />
                        <Ingredient title={'banana'} />
                        <Ingredient title={'picles'} />
                    </div>

                    <div className='stepperAndButtonWrapper'>
                        <Stepper></Stepper>

                        <OrderButton title={'Pedir - R$ 49,50'}></OrderButton>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </Container>
    )
}