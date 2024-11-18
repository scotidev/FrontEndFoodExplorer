import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'
import { SearchInput } from '../../components/SearchInput'
import { Footer } from '../../components/Footer'

import { PiX } from "react-icons/pi";
import { PiMagnifyingGlass } from "react-icons/pi"

export function UserMenu() {
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
                <SearchInput 
                    placeholder='Busque por pratos ou ingredientes'
                    icon={PiMagnifyingGlass}
                    id='search'
                />
                <div className="bottomBorder">
                    <button onClick={handleSignOut}>Sair</button>
                </div>
            </div>

            <Footer></Footer>
        </Container>
    )
}