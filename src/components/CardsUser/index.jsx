import { Link } from "react-router-dom";
import { Container, Favorite, Image, Title, Description, Price } from "./styles";
import { Stepper } from '../Stepper';
import { Button } from '../Button';
import { PiHeartStraightBold } from "react-icons/pi";

export function CardsUser({ id, image, title, description, price, ...rest }) {
    return (
        <Container {...rest}>
            <div className="card">
                <Favorite>
                    <PiHeartStraightBold />
                </Favorite>
                
                <Link to={`/dish/${id}`}>
                    <Image>
                        <img src={image} alt="Foto de prato de comida" width={88} height={88} />
                    </Image>
                </Link>

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
                    <Stepper />
                    <Button title='incluir' id='addDishBtn' />
                </div>
            </div>
        </Container>
    );
}