import styled from "styled-components";

export const Container = styled.SafeAreaView`
    background-color: #1E1E1E;
    flex:1;
    padding: 4rem;

`

export const PageContainer = styled.View`
    width: 100%;
    height: 85%;
    background-color: #FD317C;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const QuestionsByArea = styled.View`
    width: 90%;
    height: 45%;
    background-color :#D9D9D9;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    display: none;
`

export const TitleOfSection = styled.Text`
    font-weight: 600;
    font-size: 20px;
`
