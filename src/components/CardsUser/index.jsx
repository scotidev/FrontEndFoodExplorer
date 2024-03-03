import { Container, Favorite, Image, Title, Description, Price } from "./styles";
import { Stepper } from '../Stepper'
import { Button } from '../Button'

import { PiHeartStraightBold } from "react-icons/pi";


export function CardsUser({image, title, description, price, ...rest }) {
    return(
        <Container>
            <div className="card">
                <Favorite>
                    <PiHeartStraightBold />
                </Favorite>

                <Image>
                    <img src={(image)} alt="Foto de prato de comida" width={88} height={88}/>
                </Image>

                <Title>
                    {title}
                </Title>

                <Description>
                    {description}
                </Description>

                <Price>
                    {`R$ ` + price}
                </Price>
                <div className="stepperAndBtnWrap">
                    <Stepper></Stepper>
                
                    <Button title='incluir' id='addDishBtn'></Button>
                </div>
            </div>
        </Container>
    )
}