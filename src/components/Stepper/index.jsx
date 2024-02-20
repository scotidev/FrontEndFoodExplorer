import { Container } from './styles'
import { Minus } from '../Minus'
import { Plus } from '../Plus'

export function Stepper() {
    return(
        <Container>
            <Minus></Minus>
            <Plus></Plus>
        </Container>
    )
}