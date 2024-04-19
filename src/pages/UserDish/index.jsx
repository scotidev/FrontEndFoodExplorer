import { Container } from './styles'
import { HeaderUser} from '../../components/HeaderUser'

import { PiCaretLeftBold } from "react-icons/pi";


export default function UserDish() {
    return(
        <Container>
            <HeaderUser></HeaderUser>
            <div className="content">
                <button>
                    <PiCaretLeftBold />
                    voltar
                </button>
            </div>
        </Container>
    )
}