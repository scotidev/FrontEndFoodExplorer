import { Link } from "react-router-dom"

import { Container, Edit, Image, Title, Description, Price } from "./styles";

import { PiPencilSimpleBold } from "react-icons/pi";

export function CardsAdmin({image, title, description, price, ...rest }) {
    return(
        <Container {...rest}>
            <div className="card">
                <Link to="editDish/1">
                    <Edit>
                        <PiPencilSimpleBold />
                    </Edit>
                </Link>

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
            </div>
        </Container>
    )
}
