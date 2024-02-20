import { Container } from './styles'
import { PiReceipt } from 'react-icons/pi'

export function OrderButton({ title }) {
    return(
        <Container 
        type='button' 
        >
            <PiReceipt></PiReceipt>
            {title}
        </Container>
    )
}
