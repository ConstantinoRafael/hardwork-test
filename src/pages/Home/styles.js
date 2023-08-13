import styled from "styled-components";

export const Container = styled.SafeAreaView`
    background-color: #1E1E1E;
    flex:1;
    padding: 4rem;

`

export const PageContainer = styled.View`
    width: 100%;
    height: 85%;
    background-color: #EDEDED;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const BoxContent = styled.View`
    width: 90%;
    height: 20%;
    background-color: #FD317C;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;

`

export const TitleContent = styled.Text`
    font-size: 20px;
    color:#fff;
    font-weight: 800;
`

export const TextContent = styled.Text`
    width: 80%;
    font-size: 12px;
    color: #fff;
`
export const ButtonContent = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`

export const ButtonStyles = styled.TouchableOpacity`
    width: 40%;
    height: 20px;
    background-color: #fff;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    font-weight: 600;
`