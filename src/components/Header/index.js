import React from "react";
import { LogoText, HeaderStyles, RightHeaderContent, LogoContainer, RightText, ProfileImage, IconBox } from "./styles";
import { Image } from "react-native";
import { Entypo } from '@expo/vector-icons';

function Header() {
    return(
        <HeaderStyles>
            <LogoContainer>
                <LogoText>
                    LOGOTIPO
                </LogoText>
            </LogoContainer>
            
            <RightHeaderContent>
                <IconBox>
                    <Entypo name="home" size={27} color="black" /> 
                </IconBox> 
                <RightText>HOME</RightText>
                <ProfileImage source={require("./../../../assets/profile-image.jpg")}/>
            
            </RightHeaderContent>
        </HeaderStyles>
    )
}

export default Header;