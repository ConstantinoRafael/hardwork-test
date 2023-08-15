import React from "react";
import { View, Text } from "react-native";
import { Container, PageContainer, QuestionsByArea, TitleOfSection, DayleGoal, Specifics } from "./styles";
import Header from "../../components/Header";
import InputRange from "../../components/InputRange";
import HeaderPage from './../../components/HeaderPage/index';
import InputSwitch from "../../components/InputSwitch";
import InputSpecifics from "../../components/InputSpecifics";

function Personalize({ navigation }) {
    return(
        <Container>
            <Header />
            
            <PageContainer>
                <HeaderPage navigation={navigation} titlePage={"Personalizar"}/>
                <DayleGoal>
                    <TitleOfSection>Definir meta diária de questões:</TitleOfSection>
                    <InputRange min={0} max={200} steps={1} />
                </DayleGoal>
                
                
                <QuestionsByArea>
                    <TitleOfSection>Questões por Grandes áreas:</TitleOfSection>
                    <InputSwitch area={"Clínica médica"} />
                    <InputSwitch area={"Cirurgia geral"} />
                    <InputSwitch area={"Pediatria"} />
                    <InputSwitch area={"Ginecologia e obstetrícia"} />
                    <InputSwitch area={"Medicina preventiva"} />
                </QuestionsByArea>

                <Specifics></Specifics>
                <Specifics></Specifics>
                
            </PageContainer>
        </Container>
    )
}

export default Personalize;