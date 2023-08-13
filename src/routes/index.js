import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Personalize from '../pages/Personalize/index';
import Questions from '../pages/Questions/index';
import { Teste } from "../pages/Home/styles";

const Stack = createStackNavigator();

function Routes() {
    return(
        
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                stackStyle: {
                    backgroundColor: '#'
                }
            }}>
            <Stack.Screen 
            name="Home" 
            component={Home} 
            />
            <Stack.Screen 
            name="Personalize" 
            component={Personalize} 
            />
            <Stack.Screen 
            name="Questions" 
            component={Questions} 
           />
        </Stack.Navigator>
        
    )
}

export default Routes;