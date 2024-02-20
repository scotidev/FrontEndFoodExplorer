import { Container } from './styles'

export function Ingredient({ title }) {
    return(
    <Container type='button'>
        {title}
    </Container>
    )
}