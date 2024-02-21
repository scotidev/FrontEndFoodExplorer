import { Container } from './styles'
import { Minus } from '../Minus'
import { Plus } from '../Plus'
import { Counter } from '../Counter'

export function Stepper() {
    return(
        <Container>
            <Minus></Minus>
            <Counter value="01"></Counter>
            <Plus></Plus>
        </Container>
    )
}