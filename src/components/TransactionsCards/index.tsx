import React from 'react';
import {
    Container,
     Description,
      Header,
       Amount,
        Footer,
        Category,
         Icon,
          CategoryName,
           DateTransaction
        } from './style';

export function TransactionsCards(){
    return(
        <Container>
            <Header>
                <Description>Desenvolvimento de site</Description>
                <Amount>R$ 12.000,00</Amount>
            </Header>
            <Footer>
                <Category>
                    <Icon name="dollar-sign"></Icon>
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <DateTransaction>13/04/2020</DateTransaction>
            </Footer>
        </Container>
    )
}