import React from "react";
import { View, Text } from "react-native";
import { Track, TrackContainer, TrackValue, TrackAndValue } from "./styles"


function InputRange({min, max, steps, title, onValueChange}) {
    return (
        <TrackContainer>
            <TrackAndValue>
                <Track />
                <TrackValue />
            </TrackAndValue>
            
            
        </TrackContainer>
    )
}

export default InputRange;