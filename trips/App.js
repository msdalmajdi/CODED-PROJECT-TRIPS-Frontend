import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./components/navigation/BottomTabNav";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
}

//<TripsList /> component ready to use
//<TripCreator /> component ready to use
