import { Container } from './styles'
import { PiMagnifyingGlass } from "react-icons/pi";

export function Input({ icon: Icon, ...rest}) {
    return(
        <Container>
            <input {...rest} />
            <button>
                <PiMagnifyingGlass />
            </button>
        </Container>
    )
}