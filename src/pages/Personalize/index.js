import React from "react";
import { View, Text } from "react-native";
import { Container, PageContainer, QuestionsByArea, TitleOfSection } from "./styles";
import Header from "../../components/Header";
import InputRange from "../../components/InputRange";
import HeaderPage from './../../components/HeaderPage/index';
import InputSwitch from "../../components/InputSwitch";

function Personalize({ navigation }) {
    return(
        <Container>
            <Header />
            
            <PageContainer>
                <HeaderPage navigation={navigation} titlePage={"Personalizar"}/>
                {/* <InputRange min={0} max={200} steps={1} onValueChange={(value)=> console.log(value)}/> */}
                
                <QuestionsByArea>
                    <TitleOfSection>Questões por Grandes áreas:</TitleOfSection>
                    <InputSwitch area={"Clínica médica"} />
                    <InputSwitch area={"Cirurgia geral"} />
                    <InputSwitch area={"Pediatria"} />
                    <InputSwitch area={"Ginecologia e obstetrícia"} />
                    <InputSwitch area={"Medicina preventiva"} />
                </QuestionsByArea>
                
            </PageContainer>
        </Container>
    )
}

export default Personalize;