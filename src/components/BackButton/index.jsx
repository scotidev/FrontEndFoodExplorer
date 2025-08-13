import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { PiCaretLeftBold } from "react-icons/pi";

export function BackButton() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container onClick={handleGoBack}>
      <PiCaretLeftBold />
      voltar
    </Container>
  );
}
