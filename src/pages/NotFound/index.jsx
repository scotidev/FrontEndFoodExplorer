import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { PiCloudXBold } from "react-icons/pi";

export function NotFound() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }
  return (
    <Container>
      <PiCloudXBold size={100} />

      <h1>404</h1>
      <p>Página não encontrada.</p>

      <Button title={"Voltar"} onClick={handleHome} />
    </Container>
  );
}
