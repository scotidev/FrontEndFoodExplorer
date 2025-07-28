import React from "react";
import { Container } from "./styles"; // Crie um styled-component para estilizar se quiser
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <p>Página não encontrada!</p>
      <Link to="/">Voltar para o início</Link>
    </Container>
  );
}
