import { Container } from './styles.js'
import { Button } from '../../components/Button'
import { SaveButton } from '../../components/SaveButton/index.jsx'
 
export default function App() {

  return(
    <Container>
      <Button />
      <Button />
      <Button />
      <Button />
      <SaveButton />
    </Container>
  )
}