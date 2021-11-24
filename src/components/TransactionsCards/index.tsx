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

interface Data{title: string,
    amount: string,
    category: Category,
    date: string,
    type: "up" | "down"
}

interface Props{
data: Data
}

export function TransactionsCards( {
    data
} : Props ){
    return(
        <Container>
            <Header>
                <Description>{data.title}</Description>
                <Amount type={data.type}>{data.amount}</Amount>
            </Header>
            <Footer>
                <Category>
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <DateTransaction>{data.date}</DateTransaction>
            </Footer>
        </Container>
    )
}