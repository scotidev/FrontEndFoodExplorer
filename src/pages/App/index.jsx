import { Container } from './styles.js'
import { Button } from '../../components/Button'
import { OrderButton } from '../../components/OrderButton/index.jsx'
import { Ingredient } from '../../components/Ingredient/index.jsx'
import { Stepper } from '../../components/Stepper/index.jsx'
  
export default function App() {

  return(
    <Container>
      <Button title="incluir" loading/>
      <OrderButton title="Meu pedido (0)" />
      <Ingredient title="alface" />
      <Stepper></Stepper>
    </Container>
  )
}