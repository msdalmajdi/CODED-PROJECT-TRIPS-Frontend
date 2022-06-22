import { Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Profile";
import EditProfile from "../EditProfile";
const { Navigator, Screen } = createStackNavigator();
export default function StackNavigator() {
  const navigation = useNavigation();

  return (
    <Navigator initialRouteName="Profile">
      <Screen name="Profile" component={Profile} />
      <Screen name="EditProfile" component={EditProfile} />
    </Navigator>
  );
}
