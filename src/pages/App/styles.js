import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    height: 100vh;
    width: 100%;
        
    }
`

