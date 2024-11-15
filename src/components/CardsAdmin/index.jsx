import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ou 'react-router' dependendo da versão
import { PiPencilSimpleBold } from "react-icons/pi";
import { Container, Edit, Image, Title, Description, Price } from './styles'; // Certifique-se de importar os estilos corretamente

export function CardsAdmin({ id, image, title, description, price, ...rest }) {
    const navigate = useNavigate();

    const handleEditClick = (e) => {
        e.preventDefault();
        navigate(`/editDish/${id}`);
    };

    return (
        <Container {...rest}>
            <div className="card">
                <Link to={`/editDish/${id}`} onClick={handleEditClick}>
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
    );
}
