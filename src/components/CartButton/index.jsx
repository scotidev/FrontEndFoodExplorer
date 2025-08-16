import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi";

export function CartButton({ title, ...rest }) {
  const navigate = useNavigate();

  function handleNavigateToCart() {
    navigate("/cart");
  }

  return (
    <Container type="button" onClick={handleNavigateToCart} {...rest}>
      <PiReceipt />
      {title}
    </Container>
  );
}
