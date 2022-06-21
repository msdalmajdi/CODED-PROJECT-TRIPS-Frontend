import "react-native-gesture-handler";
import StackNavigator from "./components/Navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SignInPage } from "./components/user/SignInPage";
import { SignUpPage } from "./components/user/SignUpPage";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./components/Navigation/Index";

export default function App() {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}

//<TripsList /> component ready to use
//<TripCreator /> component ready to use
