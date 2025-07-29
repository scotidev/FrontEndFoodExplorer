import { useEffect, useState } from "react";
import { Container } from "./styles";

// Componente Toast para exibir mensagens temporárias.
// Recebe 'message' (o texto a ser exibido), 'type' (para estilização, ex: 'error', 'success')
// e 'onClose' (função para chamar quando o toast deve ser fechado/removido).
export function Error({ message, type = "error", onClose }) {
  // Estado para controlar a visibilidade interna do toast (para animação de saída, se houver).
  const [isVisible, setIsVisible] = useState(false);

  // useEffect para controlar a aparição e o desaparecimento do toast.
  useEffect(() => {
    // 1. Faz o toast aparecer.
    setIsVisible(true);

    // 2. Define um temporizador para esconder o toast após 2 segundos (2000 ms).
    const timer = setTimeout(() => {
      setIsVisible(false); // Inicia a animação de saída (se houver no CSS)
      // Após um pequeno atraso para a animação de saída, chama onClose para remover o componente da DOM.
      const removeTimer = setTimeout(() => {
        onClose();
      }, 300); // Tempo para a animação de saída (ajuste se sua animação for mais longa)
      return () => clearTimeout(removeTimer);
    }, 2000); // Toast visível por 2 segundos

    // Limpa o temporizador se o componente for desmontado antes do tempo.
    return () => clearTimeout(timer);
  }, [message, onClose]); // Dependências: reage a novas mensagens ou função onClose.

  // Renderiza o Container do Toast apenas se estiver visível.
  // Passa o prop 'type' para o styled-component para aplicar estilos condicionalmente.
  // Passa o prop 'isvisible' para controlar a animação de entrada/saída via CSS.
  return (
    isVisible && (
      <Container type={type} isvisible={isVisible}>
        {message}
      </Container>
    )
  );
}
