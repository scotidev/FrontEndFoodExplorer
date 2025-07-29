import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";
import { useState } from "react";

import { Container } from "./styles.js";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, showError } = useAuth();

  function handleSignIn() {
    event.preventDefault();
    if (!email || !password) {
      showError("Por favor, preencha o e-mail e a senha.");
      return;
    }

    signIn({ email, password });
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSignIn();
    }
  }

  return (
    <Container>
      <Logo></Logo>

      <div className="loginBox">
        <h2>Faça login</h2>

        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="exemplo@email.com"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </div>
    </Container>
  );
}
