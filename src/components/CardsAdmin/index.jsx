import { Link } from 'react-router-dom'

import { PiPencilSimpleBold } from "react-icons/pi"
import { Container, Edit, Image, Title, Description, Price } from './styles'

export function CardsAdmin({ id, image, title, description, price, ...rest }) {
    return (
        <Container {...rest}>
            <div className="card">
                
                <Link to={`/editDish/${id}`}>
                    <Edit>
                        <PiPencilSimpleBold />
                    </Edit>
                </Link>

                <Link to={`/adminDish/${id}`}>
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
            </div>
        </Container>
    )
}
