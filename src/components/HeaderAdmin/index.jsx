import { useAuth } from '../../hooks/auth';
import { Link, useNavigate } from "react-router-dom"

import { Container, Menu, Searchbar, SignOut } from './styles'
import { Logo } from '../Logo'
import { Button } from '../Button';
import { Input } from '../Input'

import { PiListBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";

export function HeaderAdmin() {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        signOut()
        navigate("/")
    }

    return(
        <Container>
            <div >
                <Link to="/adminMenu">
                    <Menu>
                        <PiListBold />
                    </Menu>
                </Link>

                <div className="LogoWrap">
                    <Logo></Logo>
                    <span>admin</span>    
                </div>
            </div>
            
            <Searchbar>
                <Input placeholder='Busque por pratos ou ingredientes'/>
            </Searchbar>

            <Link to="/newDish">
                <Button title={'Novo prato'}/>
            </Link>

            <SignOut id="signOutButton" onClick={handleSignOut}>
                <PiSignOutBold />
            </SignOut>
        </Container>
    )
}
