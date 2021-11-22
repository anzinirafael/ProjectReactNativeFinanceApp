import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';


export const Container = styled.View`
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    background-color: ${({theme}) => theme.colors.shape};
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 ${RFValue(19)}px ${RFValue(47)}px ${RFValue(47)}px;
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
`

export const Values = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(32)}px;
    margin: 0 ${RFValue(56)}px ${RFValue(47)}px ${RFValue(47)}px;
`

export const DateValues = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};   
    font-size: ${RFValue(12)}px;
    margin: 0 ${RFValue(15)}px ${RFValue(47)}px ${RFValue(47)}px;
`