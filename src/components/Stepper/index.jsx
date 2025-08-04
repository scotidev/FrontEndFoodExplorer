import { useState } from "react";

import { Container } from "./styles";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";

export function Stepper({
  initialCount = 1,
  minCount = 1,
  maxCount = 99,
  onCountChange,
  ...rest
}) {
  const [count, setCount] = useState(initialCount);

  const handleDecrement = () => {
    if (count > minCount) {
      const newCount = count - 1;
      setCount(newCount);
      if (onCountChange) {
        onCountChange(newCount);
      }
    }
  };

  const handleIncrement = () => {
    if (count < maxCount) {
      const newCount = count + 1;
      setCount(newCount);
      if (onCountChange) {
        onCountChange(newCount);
      }
    }
  };

  return (
    <Container {...rest}>
      <button onClick={handleDecrement} disabled={count === minCount}>
        <PiMinusBold />
      </button>
      <span> {String(count).padStart(2, "0")} </span>{" "}
      <button onClick={handleIncrement} disabled={count === maxCount}>
        <PiPlusBold />
      </button>
    </Container>
  );
}
