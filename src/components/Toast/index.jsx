import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Toast({ message, type = "error", onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    const removeComponentTimer = setTimeout(() => {
      onClose();
    }, 3000 + 500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeComponentTimer);
    };
  }, [message, onClose]);

  return (
    <Container type={type} isvisible={isVisible}>
      {message}
    </Container>
  );
}
