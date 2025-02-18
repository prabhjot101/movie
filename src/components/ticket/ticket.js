import React from 'react'
import styled from 'styled-components'

function ticket() {
    return (
        <Container>
            <TicketSection>
                <TicketMessage>
                    
                    <h3>
                        Your show ticket has been successfully booked.
                        We hope to see you soon. 🍿
                    </h3>
                </TicketMessage>
                
            </TicketSection>
        </Container>
    )
}

export default ticket

const Container = styled.main`
    min-height: calc(100vh - 140px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
`
const TicketSection = styled.div`
    margin-top: 40px;
    background: #0c111b;
    border-radius: 10px;
    padding: 30px 30px;
`

const TicketMessage = styled.div`
    h1 {
        position: relative;
        img {
            vertical-align: middle;
            height: 60px;
        }
    }
`

const DownloadTicket = styled.div`
    margin: 20px 0px;
`

const Download = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 10px 20px; 
    display: flex;
    align-items: center;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    img {
        height: 40px;
    }
`