import { Container, Menu, Orders } from './styles'
import { Logo } from '../Logo'

import { PiReceipt } from 'react-icons/pi'
import { PiListBold } from "react-icons/pi";

export function HeaderUser() {
    return(
        <Container>
            <Menu>
                <PiListBold />
            </Menu>
            <Logo></Logo>
                <div>
                    <Orders>
                        <PiReceipt />
                    </Orders>
                    <span>0</span>
                </div>
        </Container>
    )
}