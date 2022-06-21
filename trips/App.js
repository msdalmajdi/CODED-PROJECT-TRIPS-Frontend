<<<<<<< HEAD
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Profile from "./components/Profile";
import StackNavigator from "./components/Navigation/StackNavigator";
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SignInPage } from './components/user/SignInPage';
import { SignUpPage } from './components/user/SignUpPage';
import { NavigationContainer } from '@react-navigation/native';
import Index from './components/navigation/Index';
>>>>>>> origin/main

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
=======
      <Index />
      </NavigationContainer>
  );
}

//<TripsList /> component ready to use
//<TripCreator /> component ready to use
>>>>>>> origin/main
