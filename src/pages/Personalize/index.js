import React from "react";
import { View, Text } from "react-native";
import { Container, PageContainer } from "./styles";
import Header from "../../components/Header";
import InputRange from "../../components/InputRange";
import HeaderPage from './../../components/HeaderPage/index';

function Personalize({ navigation }) {
    return(
        <Container>
            <Header />
            
            <PageContainer>
                <HeaderPage navigation={navigation} titlePage={"Personalizar"}/>
                {/* <InputRange min={0} max={200} steps={1} onValueChange={(value)=> console.log(value)}/> */}
            </PageContainer>
        </Container>
    )
}

export default Personalize;