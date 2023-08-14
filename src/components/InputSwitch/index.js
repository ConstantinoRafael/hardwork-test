import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { AreaAndSwitch, TextArea, SwitchContainer, SwitchTrack, SwitchTumb } from "./styles";

function InputSwitch({ area }) {
    const [isEnable, setIsEnable] = useState(false);

    function toggleSwitch() {

    }

    return (
        <AreaAndSwitch>
            <TextArea>{area}</TextArea>

            
            <SwitchTrack isEnable={isEnable} onPress={() => setIsEnable(!isEnable)}>
                <SwitchTumb></SwitchTumb>
            </SwitchTrack>

            {/* <Switch 
                trackColor={{false: "#8B8B8B", true: "#00C528"}}
                thumbColor="#fff"
                value={isEnable}
                onValueChange={
                    ()=>{setIsEnable(!isEnable)}
                }
            /> */}
        </AreaAndSwitch>
    )
}

export default InputSwitch;