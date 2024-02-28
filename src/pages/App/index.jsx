import { Container } from './styles.js'
import { HeaderUser } from '../../components/HeaderUser/index.jsx'
import { Logo } from '../../components/Logo/index.jsx'
import { OrderButton } from '../../components/OrderButton/index.jsx'
import { HeaderAdmin } from '../../components/HeaderAdmin/index.jsx'
  
export default function App() {

  return(
    <Container>
      <HeaderUser></HeaderUser>
    </Container>
  )
}