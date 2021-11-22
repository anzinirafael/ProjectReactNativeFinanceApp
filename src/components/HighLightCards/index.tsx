import React from 'react';
import {
    Container,
    Header,
    Title,
    Icon,
    Values,
    DateValues
} from './style';

export function HighLightCard(){
    return(
        <Container>
            <Header>
                <Title></Title>
                <Icon name="arrow-up-circle"></Icon>
            </Header>
            <Values></Values>
            <DateValues></DateValues>
        </Container>
    )
}