import { useAuth } from '../../hooks/auth';
import { Link } from "react-router-dom"

import { Container, Menu, Searchbar, Orders, SignOut } from './styles'
import { Logo } from '../Logo'
import { OrderButton } from '../OrderButton';
import { Input } from '../Input';

import { PiListBold } from "react-icons/pi";
import { PiReceipt } from 'react-icons/pi'
import { PiSignOutBold } from "react-icons/pi";

export function HeaderUser() {
    const { signOut } = useAuth()

    return(
        <Container>
            <Link to="/menu">
                <Menu>
                    <PiListBold />
                </Menu>
            </Link>

            <Logo></Logo>

            <Orders id='OrdersButton'>
                <PiReceipt />
                <span>0</span>
            </Orders>

            <Searchbar>
                <Input placeholder='Busque por pratos ou ingredientes'/>
            </Searchbar>

            <OrderButton title={'Pedidos (0)'} id='OrdersDesktop'/>

            <SignOut id="signOutButton" onClick={signOut}>
                <PiSignOutBold />
            </SignOut> 
        </Container>
    )
}