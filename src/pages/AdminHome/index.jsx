import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { CardsAdmin } from '../../components/CardsAdmin'
import { Footer } from '../../components/Footer'

// para criar o carrossel de imagens
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react'

//icons
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

//imagens
import homeImg from '../../assets/images/homeImage.svg'
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

export function AdminHome() {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])


    return(
        <Container>
            <HeaderAdmin></HeaderAdmin>

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
            ref={carousel}
            >
                <div 
                className="opacityAndLeftButtonContainer"
                style={{backgroundImage: 'linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.27)  100%)'}}>
                    <button className="leftButton"><PiCaretLeftBold /></button>
                </div>

                <h2>Refeições</h2>

                <motion.div 
                className="cardsWrapper"
                drag='x'
                dragConstraints={{right: 0, left: -width}}
                initial={{x: 100}}
                animate={{x: 0}}
                transition={{ duration: 0.8}}
                >
                    <CardsAdmin 
                    image={ravanello}
                    title={'Salada Ravanello >'}
                    description={'Rabanetes, folhas verdes e molho agridoce salpicados com gergilim. '}
                    price={'49,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={gambe}
                    title={'Spaguetti Gambe >'}
                    description={'Massa fresca com camarões e pesto.'}
                    price={'79,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={parma}
                    title={'Torradas de parma >'}
                    description={'Presunto de parma e rúcula em um pão com fermentação natural.'}
                    price={'25,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={molla}
                    title={'Salada Molla >'}
                    description={'Massa fresca com legumes.'}
                    price={'32,17'}
                    ></CardsAdmin>
                </motion.div>

                <div className="opacityAndRightButtonContainer"
                style={{backgroundImage: 'linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%)'}}>
                    <button className="rightButton"><PiCaretRightBold /></button>
                </div>
            </motion.section>

            <motion.section whileTap={{ cursor: "grabbing"}}>

                <div 
                className="opacityAndLeftButtonContainer"
                style={{backgroundImage: 'linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.27)  100%)'}}>
                    <button className="leftButton"><PiCaretLeftBold /></button>
                </div>

                <h2>Sobremesas</h2>
                
                <motion.div 
                className="cardsWrapper"
                drag='x'
                dragConstraints={{right: 0, left: -width}}
                initial={{x: 100}}
                animate={{x: 0}}
                transition={{ duration: 0.8}}
                >
                    <CardsAdmin 
                    image={prune}
                    title={'Prugna Pie >'}
                    description={'Torta de ameixa com massa amanteigada, polvilho em açúcar.'}
                    price={'79,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={pastry}
                    title={'Peachy Pastry >'}
                    description={'Delicioso folheado de pêssego com folhas de hortelã.'}
                    price={'32,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={macaron}
                    title={'Macarons >'}
                    description={'Farinha de amêndoas, manteiga, claras e açúcar.'}
                    price={'79,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={pie}
                    title={'Bolo de Damasco >'}
                    description={'Damascos frescos em uma massa suave.'}
                    price={'32,97'}
                    ></CardsAdmin>
                </motion.div>

                <div className="opacityAndRightButtonContainer"
                style={{backgroundImage: 'linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%)'}}>
                    <button className="rightButton"><PiCaretRightBold /></button>
                </div>
            </motion.section>
                
            <motion.section whileTap={{ cursor: "grabbing"}}>
                <div 
                className="opacityAndLeftButtonContainer"
                style={{backgroundImage: 'linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.27)  100%)'}}>
                    <button className="leftButton"><PiCaretLeftBold /></button>
                </div>

                <h2>Bebidas</h2>
                
                <motion.div 
                className="cardsWrapper"
                drag='x'
                dragConstraints={{right: 0, left: -width}}
                initial={{x: 100}}
                animate={{x: 0}}
                transition={{ duration: 0.8}}
                >
                    <CardsAdmin 
                    image={coffe}
                    title={'Espresso >'}
                    description={'Café cremoso feito na temperatura e pressão perfeitas.'}
                    price={'15,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={juice}
                    title={'Suco de Maracujá >'}
                    description={'Suco de maracujá gelado, cremoso, docinho.'}
                    price={'13,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={tea}
                    title={"Tè d'autunno >>"}
                    description={'Chá de anis, canela e limão. Sinta o outono italiano.'}
                    price={'19,97'}
                    ></CardsAdmin>

                    <CardsAdmin 
                    image={soda}
                    title={'Soda de Pomelo >'}
                    description={'Maçã, pomelo e soda italiana'}
                    price={'32,97'}
                    ></CardsAdmin>
                </motion.div>
                
                <div className="opacityAndRightButtonContainer"
                style={{backgroundImage: 'linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%)'}}>
                    <button className="rightButton"><PiCaretRightBold /></button>
                </div>

            </motion.section>
            <Footer></Footer>
        </Container>
    )
}