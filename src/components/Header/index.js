import React from "react";
import { LogoText, HeaderStyles, HeaderContainer, RightHeaderContent, LogoContainer, RightText, ProfileImage, IconBox } from "./styles";
import { Image } from "react-native";
import { Entypo } from '@expo/vector-icons';

function Header() {
    return(
        <HeaderContainer>
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
        </HeaderContainer>
        
    )
}

export default Header;