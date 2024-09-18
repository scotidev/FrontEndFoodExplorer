import { Link } from "react-router-dom"

import { Container } from './styles.js'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export  function SignIn() {
  
  return(
    <Container>
        <Logo></Logo>

        <div className="loginBox">
        
          <h2>Faça login</h2>

          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Exemplo: exemplo@email.com.br"
              type="text"
              id="email"
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="password">Senha</label>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              id="password"
            />
          </div>

          <Button title="Entrar" />

          <Link to="/register">Criar conta</Link>
        </div>
    </Container>
  )
}