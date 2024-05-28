import { Container } from './styles.js'
import { Logo } from '../../components/Logo/index.jsx'
import { Input } from '../../components/Input/index.jsx'
import { Button } from '../../components/Button/index.jsx'

export default function SignUp() {

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
            />
          </div>

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

          <a href="#">Já tenho uma conta</a>
        </div>
    </Container>
  )
}