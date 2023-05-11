import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { Login } from "./src/sections";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" style="light" />
        <Login />
      </NavigationContainer>
    </PaperProvider>
  );
}
