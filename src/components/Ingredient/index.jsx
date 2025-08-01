import { Container } from "./styles";

export function Ingredient({ title }) {
  return (
    <Container type="button" disabled={true}>
      {title}
    </Container>
  );
}
