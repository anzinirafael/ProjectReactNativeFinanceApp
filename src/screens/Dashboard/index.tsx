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
            </Header>
            <HighLightCards 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingLeft: 24, paddingRight: 24}}
                > 
                    <HighLightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril"
                    />
                    <HighLightCard
                    type="down"                     
                    title="Saídas" 
                    amount="R$ 1.259,00" 
                    lastTransaction="Última saída dia 03 de abril"
                    />
                    <HighLightCard 
                    type="total"
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 à 16 de abril"
                    />
                </HighLightCards>
        </Container>
    );
}