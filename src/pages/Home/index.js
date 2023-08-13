import React from "react";
import { View, Text, Button } from "react-native";
import { BoxContent, ButtonContent, ButtonStyles, Container, FullPage, PageContainer, TextContent, TextButton, TitleContent } from "./styles";
import Header from "../../components/Header";

function Home({ navigation }) {
    return (
        <Container>
            <Header/>
            <PageContainer>
                <BoxContent>
                    <TitleContent>
                        QUESTÕES
                    </TitleContent>
                    <TextContent>
                        Prepare-se de forma personalizada respondendo ao banco de questões!
                    </TextContent>
                    <ButtonContent> 
                        <ButtonStyles title="Ir para questões" onPress={() => navigation.navigate("Questions")}>
                            <TextButton>
                                Começar
                            </TextButton>
                        </ButtonStyles>
                    </ButtonContent>
                    
                    
                </BoxContent>
                <BoxContent>
                    <TitleContent>
                        PERSONALIZAR
                    </TitleContent>
                    <ButtonContent title="Ir para questões" onPress={() => navigation.navigate("Questions")}>
                        <Text>
                            Acessar
                        </Text>
                    </ButtonContent>
                    
                </BoxContent>
                <BoxContent>
                    <TitleContent>
                        MÉTRICAS
                    </TitleContent>
                    <ButtonContent >
                        <Text>
                            Acessar
                        </Text>
                    </ButtonContent>
                    
                </BoxContent>
                <BoxContent>
                    <TitleContent>
                        CHATBOT
                    </TitleContent>
                    <TextContent>
                        Treine através de trívias geradas pelo nosso chatbot do Telegram.
                    </TextContent>
                    <ButtonContent >
                        <Text>
                            Começar
                        </Text>
                    </ButtonContent>
                    
                </BoxContent>
                </PageContainer>
        </Container>
    )
}

export default Home;