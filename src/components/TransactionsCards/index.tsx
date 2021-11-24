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

interface Category{
    icon: string,
    name: string,
}

interface Props{
    title: string,
    amount: string,
    category: Category,
    date: string,
    type: "up" | "down"
}

export function TransactionsCards( {
    title, 
    amount, 
    category, 
    date,
    type
} : Props ){
    return(
        <Container>
            <Header>
                <Description>{title}</Description>
                <Amount type={type}>{amount}</Amount>
            </Header>
            <Footer>
                <Category>
                    <Icon name={category.icon}/>
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <DateTransaction>{date}</DateTransaction>
            </Footer>
        </Container>
    )
}