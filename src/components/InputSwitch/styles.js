import styled from "styled-components";

export const AreaAndSwitch = styled.View`
    background-color: #D9D9D9 ;
    width: 90%;
    height: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid;
    border-radius: 7px;
`

export const TextArea = styled.Text`
    font-size: 16px;
`

export const SwitchTrack = styled.TouchableOpacity`
    background-color:${props => props.isEnable ? "#8B8B8B" : "#00C528"};
    width: 40px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.isEnable ? "flex-start" : "flex-end"};

    
`
export const SwitchTumb = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: #fff;
    margin: 0px 2px;
    
`