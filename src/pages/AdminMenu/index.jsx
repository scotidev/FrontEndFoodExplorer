import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../../hooks/auth';

import { Container } from './styles'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'

import { PiX } from "react-icons/pi";
import { PiMagnifyingGlass } from "react-icons/pi"

export function AdminMenu() {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        signOut()
        navigate("/")
    }
    
    return(
        <Container>
            <div className="header">
                <Link to="/">
                    <button>
                        <PiX />
                    </button>
                </Link>
                <span>Menu</span>
            </div>

            <div className="content">
                <Input 
                    placeholder='Busque por pratos ou ingredientes'
                    icon={PiMagnifyingGlass}
                    id='search'
                />
                <div className="newDishContainer">
                    <Link to="/newDish">
                        <button>Novo Prato</button>
                    </Link>
                </div>
                <div className="exitContainer">
                        <button onClick={handleSignOut}>Sair</button>
                </div>
            </div>

            <Footer></Footer>
        </Container>
    )
}