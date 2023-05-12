import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { Login, Register, Home } from "./src/sections";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar backgroundColor="transparent" style="light" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
