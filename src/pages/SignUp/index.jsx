import { useState } from 'react'
import { api } from "../../services/api.js"
import { Link, useNavigate } from "react-router-dom"

import { Container } from './styles.js'
import { Logo } from '../../components/Logo/index.jsx'
import { Input } from '../../components/Input/index.jsx'
import { Button } from '../../components/Button/index.jsx'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos.")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!") 
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert(error)
      }
    })
  }

  return(
    <Container>
        <Logo></Logo>

        <div className="loginBox">
        
          <h2>Crie sua conta</h2>

          <div className="inputWrapper">
            <label htmlFor="name">Nome</label>
            <Input
            placeholder="Seu nome completo"
            type="text"
            id="name"
            onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Exemplo: exemplo@email.com.br"
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="password">Senha</label>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button title="Cadastrar" onClick={handleSignUp}/>

          <Link to="/">Já tenho uma conta</Link>
        </div>
    </Container>
  )
}