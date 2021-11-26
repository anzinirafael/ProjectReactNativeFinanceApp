import React from 'react';
import {
    Container,
    Header,
    Title,
    InputName,
    InputValue,
    Buttons,
    Income,
    IconUp,
    ButtonUpName,
    Outcome,
    IconDown,
    ButtonDownName,
    CategoryList,
    IconBelow
} from './style';

export function Register(){
    return(
        <Container>
            <Header>
                <Title></Title>
            </Header>
            <InputName placeholder="Nome"/>
            <InputValue placeholder="Preço"/>
            <Buttons>
                <Income>
                    <IconUp></IconUp>
                    <ButtonUpName />
                </Income>
                <Outcome>
                    <IconDown></IconDown>
                    <ButtonDownName />
                </Outcome>
            </Buttons>
            <CategoryList >
                <IconBelow />  
            </CategoryList>
            <ButtonCommit />
        </Container>
    )
}