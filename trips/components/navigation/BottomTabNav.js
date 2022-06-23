import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HelloWorldApp } from "../ph";
import TripsList from "../TripsList";
import { observer } from "mobx-react";
import Index from "./Index";
import { SignInPage } from "../user/SignInPage";
import userStore from "../../stores/userStore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TripCreator from "../TripCreator";
import ProfileNav from "./ProfileNav";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNav() {
  let isSignedIn = false;
  if (userStore.user) isSignedIn = true;
  return (
    <>
      {isSignedIn ? (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarStyle: { borderTopWidth: 0 },
            headerStyle: { backgroundColor: "#6FB6F6" },
            headerTitleStyle: {
              color: "white",
              fontFamily: "Roboto",
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            tabBarActiveBackgroundColor: "#199EF3",
            tabBarInactiveBackgroundColor: "#6FB6F6",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Index}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="md-home"
                    size={28}
                    color={tabInfo.focused ? "black" : "white"}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Create a Trip"
            component={TripCreator}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: (tabInfo) => {
                return (
                  <AntDesign
                    name="pluscircle"
                    size={28}
                    color={tabInfo.focused ? "black" : "white"}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileNav}
            options={{
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => userStore.signout()}
                  style={styles.signoutBtn}
                >
                  <Text style={styles.signoutText}>Signout</Text>
                </TouchableOpacity>
              ),
              tabBarShowLabel: false,
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="person"
                    size={28}
                    color={tabInfo.focused ? "black" : "white"}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Signin"
            component={SignInPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </>
  );
}

export default observer(BottomTabNav);

const styles = StyleSheet.create({
  signoutBtn: {
    width: "50%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#C6C9CC",
    fontFamily: "Roboto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  signoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    fontFamily: "Roboto",
  },
});
