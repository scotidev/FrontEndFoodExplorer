import { useState } from "react";
import { useAuth } from "../../hooks/auth.jsx";
import { api } from "../../services/api.js";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "./styles.js";
import { Logo } from "../../components/Logo/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import { Button } from "../../components/Button/index.jsx";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { showError, showSuccess } = useAuth();

  function isValidEmail(email) {
    // Expressão regular para validar formatode email (texto@texto.dominio)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSignUp(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      return showError("Preencha todos os campos.");
    }

    if (!isValidEmail(email)) {
      return showError("Digite um formato de e-mail válido.");
    }

    if (password.length < 6) {
      return showError("A senha deve ter no mínimo 6 caracteres.");
    }

    setLoading(true);

    try {
      await api.post("/users", { name, email, password });
      showSuccess("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        showError(error.response.data.message);
      } else {
        showError("Não foi possível cadastrar.");
      }
    } finally {
      setLoading(false);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSignUp(event);
    }
  }

  return (
    <Container>
      <Logo />

      <div className="loginBox">
        <h2>Crie sua conta</h2>

        <div className="inputWrapper">
          <label htmlFor="name">Nome</label>
          <Input
            placeholder="Seu nome completo"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="exemplo@email.com.br"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
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

        <Button
          title={loading ? "Cadastrando..." : "Cadastrar"}
          onClick={handleSignUp}
          disabled={loading}
        />

        <Link to="/">Já tenho uma conta</Link>
      </div>
    </Container>
  );
}
