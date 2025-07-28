import React from "react";
import { Container } from "./styles"; // Crie um styled-component para estilizar se quiser
import { Link } from "react-router-dom";

export function AccessDenied() {
  return (
    <Container>
      <h1>Acesso Negado</h1>
      <p>Você não tem permissão para acessar esta página.</p>
      <Link to="/">Voltar para o início</Link>
    </Container>
  );
}
