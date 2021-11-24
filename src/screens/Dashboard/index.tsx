import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighLightCard } from '../../components/HighLightCards';
import { TransactionsCards } from '../../components/TransactionsCards';
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
    HighLightCards,
    Transactions,
    Title,
    ListTransactions
} from './styles';

const data = [{
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{icon: 'dollar-sign', name: 'Vendas'},
    date : "13/04/2020",
    type: "up"
},
{
    title:"Hamburgueria Pizzy",
    amount:"- R$ 59,00",
    category:{icon: '', name: 'Alimentação'},
    date : "10/04/2020",
    type: "down"
},
{
title:"Desenvolvimento de site",
amount:"R$ 12.000,00",
category:{icon: 'dollar-sign', name: 'Vendas'},
date : "13/04/2020",
type: "up"
},
{
title:"Hamburgueria Pizzy",
amount:"- R$ 59,00",
category:{icon: '', name: 'Alimentação'},
date : "10/04/2020",
type: "down"
}]
export function Dashboard(  ){
    return (
        <Container>
            <Header>
                <UserWarapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/93722124?v=4' }} />
                        <User>
                            <UserGreetings>Olá,</UserGreetings>
                            <UserName>Rafael</UserName>
                        </User>
                    </UserInfo>
                    <IconPower name="power" />
                </UserWarapper>
            </Header>
            <HighLightCards
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 24, paddingRight: 24 }}
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
            <Transactions>
                <Title>Listagem</Title>
                <ListTransactions data={data}
                    renderItem={({ item }) => <TransactionsCards data={item} />}    
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: getBottomSpace() }}
                />
                
            </Transactions>
        </Container>
    );
}