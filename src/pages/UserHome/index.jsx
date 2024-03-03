import { Container } from './styles'
import { HeaderUser } from '../../components/HeaderUser'
import { CardsUser } from '../../components/CardsUser'
import { Footer } from '../../components/Footer'

import { useKeenSlider } from 'keen-slider/react' 
import 'keen-slider/keen-slider.min.css'

import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

import homeImg from '../../assets/images/homeImage.png'
import juice from '../../assets/images/juice.png'
import coffe from '../../assets/images/coffe.png'
import gambe from '../../assets/images/gambe.png'
import macaron from '../../assets/images/macaron.png'
import molla from '../../assets/images/molla.png'
import parma from '../../assets/images/parma.png'
import pastry from '../../assets/images/pastry.png'
import pie from '../../assets/images/pie.png'
import prune from '../../assets/images/prune.png'
import ravanello from '../../assets/images/ravanello.png'
import soda from '../../assets/images/soda.png'
import tea from '../../assets/images/tea.png'

export default function UserHome() {
    const {sliderRef} = useKeenSlider({
        slides: {
            perView: 2,
        }
    })

    return(
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

            <section ref={sliderRef}>
                <PiCaretLeftBold />

                <h2>Refeições</h2>

                <div className="cardsWrapper">
                    <CardsUser 
                    image={ravanello}
                    title={'Salada Ravanello >'}
                    description={'Rabanetes, folhas verdes e molho agridoce salpicados com gergilim. '}
                    price={49.97}
                    ></CardsUser>

                    <CardsUser 
                    image={gambe}
                    title={'Spaguetti Gambe >'}
                    description={'Massa fresca com camarões e pesto.'}
                    price={79.97}
                    ></CardsUser>

                    <CardsUser 
                    image={parma}
                    title={'Torradas de parma >'}
                    description={'Presunto de parma e rúcula em um pão com fermentação natural.'}
                    price={25.97}
                    ></CardsUser>

                    <CardsUser 
                    image={molla}
                    title={'Salada Molla >'}
                    description={'Massa fresca com legumes.'}
                    price={32.17}
                    ></CardsUser>
                </div>

                <PiCaretRightBold />
            </section>

            <section>
                <PiCaretLeftBold />

                <h2>Sobremesas</h2>
                
                <div className="cardsWrapper">
                    <CardsUser 
                    image={prune}
                    title={'Prugna Pie >'}
                    description={'Torta de ameixa com massa amanteigada, polvilho em açúcar.'}
                    price={79.97}
                    ></CardsUser>

                    <CardsUser 
                    image={pastry}
                    title={'Peachy Pastry >'}
                    description={'Delicioso folheado de pêssego com folhas de hortelã.'}
                    price={32.97}
                    ></CardsUser>

                    <CardsUser 
                    image={macaron}
                    title={'Macarons >'}
                    description={'Farinha de amêndoas, manteiga, claras e açúcar.'}
                    price={79.97}
                    ></CardsUser>

                    <CardsUser 
                    image={pie}
                    title={'Bolo de Damasco >'}
                    description={'Damascos frescos em uma massa suave.'}
                    price={32.97}
                    ></CardsUser>
                </div>

                <PiCaretRightBold />
            </section>
                
            <section>
                <PiCaretLeftBold />

                <h2>Bebidas</h2>
                
                <div className="cardsWrapper">
                    <CardsUser 
                    image={coffe}
                    title={'Espresso >'}
                    description={'Café cremoso feito na temperatura e pressão perfeitas.'}
                    price={'15,97'}
                    ></CardsUser>

                    <CardsUser 
                    image={juice}
                    title={'Suco de Maracujá >'}
                    description={'Suco de maracujá gelado, cremoso, docinho.'}
                    price={'13.97'}
                    ></CardsUser>

                    <CardsUser 
                    image={tea}
                    title={"Tè d'autunno >>"}
                    description={'Chá de anis, canela e limão. Sinta o outono italiano.'}
                    price={'19.97'}
                    ></CardsUser>

                    <CardsUser 
                    image={soda}
                    title={'Soda de Pomelo >'}
                    description={'Maçã, pomelo e soda italiana'}
                    price={32.97}
                    ></CardsUser>
                </div>
                
                <PiCaretRightBold />

            </section>
            <Footer></Footer>
        </Container>
    )
}