import React from "react";
import {ButtonBackHome, HeaderPageStyles, TextButton, IconButton, Title, RightSideHeader} from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

function HeaderPage({ titlePage, navigation }) {
    return (
        <HeaderPageStyles>
            <ButtonBackHome title="Home" onPress={() => navigation.navigate("Home") }>
                <IconButton>
                    <AntDesign name="left" size={16} color="black" />
                </IconButton>
                <TextButton>
                    Voltar
                </TextButton>
            </ButtonBackHome>

            <RightSideHeader>
                <Title>{titlePage}</Title>
            </RightSideHeader>

        </HeaderPageStyles>
    )
        
    
}

export default HeaderPage;