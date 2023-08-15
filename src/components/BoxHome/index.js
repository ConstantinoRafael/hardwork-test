import React from "react";
import { BoxContent, ButtonContent, ButtonStyles, TextButton, TextContent, TitleContent } from "./styles"

function BoxHome({navigation, icon, title, text, pageToGo, textButton}) {
    return(
        <BoxContent>
            <TitleContent>
                {title}
            </TitleContent>
            {text ? <TextContent>{text}</TextContent> : ""}            
            <ButtonContent>
                <ButtonStyles onPress={() => navigation.navigate(`${pageToGo}`)}>
                    <TextButton>
                        {textButton}
                    </TextButton>
                </ButtonStyles>
            </ButtonContent>            
        </BoxContent>
    )
}

export default BoxHome