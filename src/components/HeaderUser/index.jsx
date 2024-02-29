import { Container, Menu, Searchbar, Orders, SignOut } from './styles'
import { Logo } from '../Logo'
import { OrderButton } from '../OrderButton';
import { Input } from '../Input';

import { PiListBold } from "react-icons/pi";
import { PiReceipt } from 'react-icons/pi'
import { PiSignOutBold } from "react-icons/pi";
import { PiMagnifyingGlass } from "react-icons/pi";

export function HeaderUser() {
    return(
        <Container>
            <Menu>
                <PiListBold />
            </Menu>

            <Logo></Logo>

            <Orders id='OrdersButton'>
                <PiReceipt />
                <span>0</span>
            </Orders>

            <Searchbar>
                <Input 
                placeholder='Busque por pratos ou ingredientes'
                icon={PiMagnifyingGlass}
                />
            </Searchbar>

            <OrderButton title={'Pedidos (0)'} id='OrdersDesktop'/>

            <SignOut>
                <PiSignOutBold />
            </SignOut> 
        </Container>
    )
}




{/*<Menu>
                <PiListBold />
            </Menu>
            
            <Logo></Logo>

            <div>
                <Orders>
                    <PiReceipt />
                </Orders>
                <span>0</span>
            </div> 

             <Searchbar>
                <Input 
                placeholder='Busque por pratos ou ingredientes'
                icon={PiMagnifyingGlass}
                />
            </Searchbar>

            <OrderButton title={'Pedidos (0)'} id='OrdersBtn'/>

            <SignOut>
                <PiSignOutBold />
            </SignOut> 

        </Container*/}