import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen
        name="Profile"
        options={() => ({
          headerStyle: {
            backgroundColor: "#F6C913",
            headerTitleAlign: "center",
          },
        })}
        component={StackNavigator}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
