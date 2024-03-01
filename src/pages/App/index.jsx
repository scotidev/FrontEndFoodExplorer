import { CardsAdmin } from '../../components/CardsAdmin/index.jsx'
import { CardsUser } from '../../components/CardsUser/index.jsx'
import { Container } from './styles.js'
  
export default function App() {

  return(
    <Container>
      <CardsUser 
        title='Suco de Maracuja >' 
        description={'Presunto de parma e rúcula em um pão com fermentação natural.'} 
        price={13.55}>
      </CardsUser>

      <CardsAdmin
      title='Suco de Maracuja >' 
      description={'Presunto de parma e rúcula em um pão com fermentação natural.'} 
      price={18.55}>
      </CardsAdmin>
    </Container>
  )
}