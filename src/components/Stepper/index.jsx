import { Container } from "./styles";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";

export function Stepper({ quantity, setQuantity, ...rest }) {
  const minCount = 1;
  const maxCount = 99;

  const handleDecrement = () => {
    if (quantity > minCount) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < maxCount) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container {...rest}>
      <button onClick={handleDecrement} disabled={quantity === minCount}>
        <PiMinusBold />
      </button>
      <span> {String(quantity).padStart(2, "0")} </span>{" "}
      <button onClick={handleIncrement} disabled={quantity === maxCount}>
        <PiPlusBold />
      </button>
    </Container>
  );
}
