import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/navigation";

const App = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />

      <Navigation />
    </>
  );
};

export default App;
//am ramas la minutul 2:01:04
//https://www.youtube.com/watch?v=rb70_TXRQNE
