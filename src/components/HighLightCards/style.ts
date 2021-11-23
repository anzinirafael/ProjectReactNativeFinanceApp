import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';


export const Container = styled.View`
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    background-color: ${({theme}) => theme.colors.shape};
    margin-top: ${RFValue(26)}px;
    margin-right: ${RFValue(16)}px;
    border-radius: ${RFValue(5)}px;
    padding: ${RFValue(19)}px ${RFValue(23)}px;
    padding-bottom: ${RFValue(42)}px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
    color: ${({theme}) => theme.colors.success};
`

export const Footer = styled.View`
    margin-top: ${RFValue(38)}px;

`

export const Amount = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(32)}px;
    margin-bottom: ${RFValue(0)}px;
`

export const LastTransactionDate = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};   
    font-size: ${RFValue(12)}px;
    margin-top: ${RFValue(0)}px;
`