import { Container } from './styles'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'

import { PiX } from "react-icons/pi";
import { PiMagnifyingGlass } from "react-icons/pi"

export default function UserMenu() {
    
    return(
        <Container>
            <div className="header">
                <button>
                    <PiX />
                </button>
                <span>Menu</span>
            </div>

            <div className="content">
                <Input 
                    placeholder='Busque por pratos ou ingredientes'
                    icon={PiMagnifyingGlass}
                    id='search'
                />
                <div className="bottomBorder">
                    <button>Sair</button>
                </div>
            </div>

            <Footer></Footer>
        </Container>
    )
}