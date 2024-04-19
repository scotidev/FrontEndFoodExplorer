import { Container } from './styles'
import { PiMinusBold } from "react-icons/pi";
import { PiPlusBold } from "react-icons/pi";

export function Stepper() {
    return(
        <Container>
            <PiMinusBold />

            <span> 01 </span>
            
            <PiPlusBold />
        </Container>
    )
}