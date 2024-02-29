import { Container } from './styles'

import { PiReceipt } from 'react-icons/pi'

export function OrderButton({ title, ...rest }) {
    return(
        <Container 
        type='button' 
        {...rest}
        >
            <PiReceipt />
            {title}
        </Container>
    )
}