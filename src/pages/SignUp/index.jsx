import { useState } from "react";
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
  const [loading, setLoading] = useState(false); // Adiciona estado de carregamento

  const navigate = useNavigate();

  async function handleSignUp(event) {
    // Torna a função assíncrona
    event.preventDefault(); // Garante que o evento padrão de submissão do formulário seja prevenido

    if (!name || !email || !password) {
      return alert("Preencha todos os campos.");
    }

    if (password.length < 6) {
      // Adiciona validação de senha mínima
      return alert("A senha deve ter no mínimo 6 caracteres.");
    }

    setLoading(true); // Ativa o estado de carregamento

    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar. Verifique sua conexão.");
      }
    } finally {
      setLoading(false); // Desativa o estado de carregamento, independentemente do sucesso ou erro
    }
  }

  // handleKeyPress agora chama handleSignUp, que já previne o default
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSignUp(event); // Passa o evento para handleSignUp
    }
  }

  return (
    <Container>
      <Logo /> {/* Componentes sem filhos podem ser self-closing */}
      <div className="loginBox">
        <h2>Crie sua conta</h2>

        <div className="inputWrapper">
          <label htmlFor="name">Nome</label>
          <Input
            placeholder="Seu nome completo"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Exemplo: exemplo@email.com.br"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
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
          disabled={loading} // Desabilita o botão durante o carregamento
        />

        <Link to="/">Já tenho uma conta</Link>
      </div>
    </Container>
  );
}
