import { Container, Menu, Searchbar, SignOut } from './styles'
import { Logo } from '../Logo'
import { Button } from '../Button';
import { Input } from '../Input'

import { PiListBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";

export function HeaderAdmin() {
    return(
        <Container>
            <div >
                <Menu>
                    <PiListBold />
                </Menu>

                <div className="LogoWrap">
                    <Logo></Logo>
                    <span>admin</span>    
                </div>
            </div>
            
            <Searchbar>
                <Input placeholder='Busque por pratos ou ingredientes'/>
            </Searchbar>

            <Button title={'Novo prato'} id='NewDishBtn' />

            <SignOut>
                <PiSignOutBold />
            </SignOut>
        </Container>
    )
}
