import React from 'react';
import {
    Container,
    Header,
    Title,
    Icon,
    Amount,
    LastTransactionDate,
    Footer
} from './style';

export function HighLightCard(){
    return(
        <Container>
            <Header>
                <Title>Entradas</Title>
                <Icon name="arrow-up-circle"></Icon>
            </Header>
            <Footer>    
                <Amount>R$ 17.400,00</Amount>
                <LastTransactionDate>Última entrada dia 13 de abril</LastTransactionDate>
            </Footer>
        </Container>
    )
}