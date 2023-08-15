import React from "react";
import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native";
import { Track, TrackContainer, TrackValue, TrackAndValue, TrackAnimation } from "./styles";
import Animated ,{ useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, useAnimatedProps } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const ATextInput = Animated.createAnimatedComponent(TextInput);
const WIDTH = Dimensions.get('window').width - 90;
const KNOBSIZE = 20;
const MAXWIDTH = WIDTH - KNOBSIZE/2 ;

function InputRange({min, max, steps}) {
    
    const x = useSharedValue(0);
    const sc = useSharedValue(1);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_,ctx) => {
            ctx.startx = x.value
        },
        onActive:(event, ctx) => {
            x.value = 
                ctx.startx + event.translationX < 0 
                ? 0 
                : ctx.startx + event.absoluteX > MAXWIDTH 
                ? MAXWIDTH 
                : ctx.startx + event.absoluteX;
            sc.value = 1.3
        },
        onEnd:() => {
            sc.value = 1
        }
    })

    const animatedTextInputProps = useAnimatedProps(() => {
        return {
            text:`${Math.round((min + (x.value / MAXWIDTH) * (max - min) / steps) * steps)}` 
        }
    })

    const styleLine = useAnimatedStyle(() => {
        return {
            backgroundColor: "#2FEB16",
            height: 10,
            marginTop:-10,
            marginLeft:0,
            borderWidth:2,
            borderColor: "#575757",
            borderRadius: 8,
            width: x.value,
        }
    })

    const knobStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value,
                },
                {
                    scale: sc.value,
                }
            ]
        }
    })

    return (
        <TrackContainer>
            <TrackAndValue>
                <TrackAnimation>
                    <Track />
                    <Animated.View style={styleLine}/>
                    <PanGestureHandler onGestureEvent={gestureHandler}>
                        <Animated.View style={[{
                            height: 30,
                            width: 40,
                            backgroundColor: "#EBEBEB",
                            marginTop:-20,
                            marginLeft:-10,
                            borderWidth: 2,
                            borderColor: "#575757",
                            borderRadius:15,
                            justifyContent:"center",
                            alignItems: "center"
                        }, knobStyle]}>
                            <Text>|  |</Text>
                        </Animated.View>
                    </PanGestureHandler>
            
                </TrackAnimation>
                
                <TrackValue>
                        <ATextInput defaultValue={"0"} editable={false} style={{fontWeight: "bold", color: "#fff", fontSize: 20}} animatedProps={animatedTextInputProps}/>
                </TrackValue>
            </TrackAndValue>
            
            
            
        </TrackContainer>
    )
}

export default InputRange;

const styles = StyleSheet.create({

})