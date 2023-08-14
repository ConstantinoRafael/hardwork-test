import React from "react";
import {ButtonBackHome, HeaderPeageStyles, TextButton, IconButton, Title, RightSideHeader} from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

function HeaderPage({ titlePage, navigation }) {
    console.log(titlePage);
    return (
        <HeaderPeageStyles>
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

        </HeaderPeageStyles>
    )
        
    
}

export default HeaderPage;