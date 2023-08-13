import styled from "styled-components";

export const HeaderStyles = styled.View`
    width: 100%;
    height: 8%;
    background-color:#1E1E1E;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const LogoContainer = styled.View`
    width: 30%;
    height: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

export const LogoText = styled.Text`
    font-weight: 600;

`

export const RightHeaderContent = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const IconBox = styled.View`
    height: 30px;
    width: 30px;
    background-color: #EBEBEB;
    border-radius: 5px;
    margin-right: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


export const RightText = styled.Text`
    color:#fff;
    font-weight: 600;
`

export const ProfileImage = styled.Image`
    height: 30px;
    width: 30px;
    margin-left: 25px;
    border-radius: 5px;
`