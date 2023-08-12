import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";


function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar hidden={true} />
    </NavigationContainer>
  )
}

export default App;
