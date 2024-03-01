import { Container, Edit, Image, Title, Description, Price } from "./styles";

import { PiPencilSimpleBold } from "react-icons/pi";

export function CardsAdmin({image, title, description, price, ...rest }) {
    return(
        <Container>
            <div className="card">
                <Edit>
                    <PiPencilSimpleBold />
                </Edit>

                <Image>
                    <img src="https://github.com/gabrielscoti42.png" alt="" width={88} height={88}/>
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
