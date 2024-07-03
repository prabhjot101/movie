import React from 'react'
import styled from 'styled-components'

function header() {
    return (
        <Nav>
            <FooterLeft>
                <span>About
                    - this is a movie booking website made with react</span>
            </FooterLeft>
            
        </Nav>
    )
}

export default header

const Nav = styled.nav`
    height: 70px; 
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const FooterLeft = styled.div`
    display: flex;
    width:50%;

    span {
        text-align: center;
    }
`
