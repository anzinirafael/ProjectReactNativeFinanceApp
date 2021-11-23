import React from 'react';
import { HighLightCard } from '../../components/HighLightCards';
import { 
    Container,
    Header,
    UserWarapper,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    IconPower,
    HighLightCards
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
                <HighLightCards 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingLeft: 24, paddingRight: 24}}
                > 
                    <HighLightCard  />
                    <HighLightCard />
                    <HighLightCard />
                </HighLightCards>
            </Header>

        </Container>
    );
}