import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { HelloWorldApp } from "../ph";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import EditProfile from "../EditProfile";
import Profile from "../Profile";


const { Navigator, Screen } = createNativeStackNavigator();

function ProfileNav() {
  const navigation = useNavigation();
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown:false,
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#6FB6F6" },
        headerTitleStyle: {
          color: "white",
          fontFamily: "Roboto",
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="EditProfile" component={EditProfile} />
    </Navigator>
    
  );
}
export default observer(ProfileNav);
