import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="31"
          viewBox="0 0 26 31"
          fill="none"
        >
          <path
            d="M13 0.744263L25.9904 8.24426V23.2443L13 30.7443L0.00961876 23.2443V8.24426L13 0.744263Z"
            fill="#4D585E"
          />
        </svg>
        <span>food explorer</span>
      </div>

      <p>© 2025 - Todos os direitos reservados.</p>
    </Container>
  );
}
