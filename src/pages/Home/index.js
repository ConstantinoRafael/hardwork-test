import React from "react";
import { View, Text, Button } from "react-native";
import { BoxContent, ButtonContent, ButtonStyles, Container, FullPage, PageContainer, TextContent, TextButton, TitleContent } from "./styles";
import Header from "../../components/Header";
import BoxHome from "../../components/BoxHome";

function Home({ navigation }) {
    return (
        <Container>
            <Header/>
            <PageContainer>
                <BoxHome 
                title={"QUESTÕES"}
                text={"Prepare-se de forma personalizada respondendo ao banco de questões!"}
                pageToGo={"Questions"}
                textButton={"Começar"}
                />

                <BoxHome 
                title={"PERSONALIZAR"}
                pageToGo={"Personalize"}
                textButton={"Acessar"}
                />

                <BoxHome 
                title={"MÉTRICA"}
                pageToGo={""}
                textButton={"Acessar"}
                />

                <BoxHome 
                title={"CHATBOT"}
                text={"Treine através de trívias geradas pelo nosso chatbot do Telegram."}
                pageToGo={"Questions"}
                textButton={"Começar"}
                />

                
                </PageContainer>
        </Container>
    )
}

export default Home;