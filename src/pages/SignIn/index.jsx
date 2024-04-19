import { Container } from './styles.js'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export default function SignIn() {
  return(
    <Container>
        <Logo></Logo>

        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Exemplo: exemplo@email.com.br"
            type="text"
            id='email'
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            id='password'
          />
        </div>

        <Button title="Entrar" />

        <a href="#">Criar conta</a>
    </Container>
  )
}