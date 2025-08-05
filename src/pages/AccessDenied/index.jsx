import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Container } from "./styles";
import { PiLockKeyDuotone } from "react-icons/pi";

export function AccessDenied() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  return (
    <Container>
      <PiLockKeyDuotone size={100} />

      <h1>Acesso Negado</h1>
      <p>Você não tem permissão para acessar esta página.</p>

      <Button title={"Voltar"} onClick={handleHome} />
    </Container>
  );
}
