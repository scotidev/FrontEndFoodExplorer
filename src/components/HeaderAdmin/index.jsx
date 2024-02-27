import { Container, Menu, Searchbar, SignOut } from './styles'
import { Button } from '../Button';
import { Logo } from '../Logo'

import { PiListBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";

export function HeaderAdmin() {
    return(
        <Container>
            <div id='jus'>
            <Menu>
                <PiListBold />
            </Menu>
            
                <Logo></Logo>
                <span>admin</span>
            </div>
            <Searchbar placeholder='Busque por pratos ou ingredientes'></Searchbar>
            <Button title='Novo Prato' id='NewDish' />

            <SignOut>
                <PiSignOutBold />
            </SignOut>
        </Container>
    )
}