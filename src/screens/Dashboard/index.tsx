import React from 'react';
import { 
    Container,
    Header,
    UserWarapper,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    IconPower
 } from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWarapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/93722124?v=4'}}/>
                        <User>
                            <UserGreetings>Olá,</UserGreetings>
                            <UserName>Rafael</UserName>
                        </User>
                    </UserInfo>
                    <IconPower name="power"/>
                </UserWarapper>
            </Header>
        </Container>
    );
}