import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Personalize from '../pages/Personalize/index';
import Questions from '../pages/Questions/index';

const Stack = createNativeStackNavigator();

function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={Home} 
            />
            <Stack.Screen name="Personalize" component={Personalize} />
            <Stack.Screen name="Questions" component={Questions} />
        </Stack.Navigator>
    )
}

export default Routes;