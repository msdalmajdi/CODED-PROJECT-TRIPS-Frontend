import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { SignInPage } from "../user/SignInPage";
// import { SignUpPage } from '../user/SignUpPage';
import { HelloWorldApp } from "../ph";
import TripsList from "../TripsList";
import TripDetails from "../TripDetails";
import userStore from "../../stores/userStore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import { Button } from "react-native";
import EditProfile from "../EditProfile";
import TripEditor from "../TripEditor";
import ProfileView from "../ProfileView";

const { Navigator, Screen } = createNativeStackNavigator();

function Index() {
  const navigation = useNavigation();
  return (
    <Navigator
      initialRouteName="List"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#6FB6F6" },
        headerTitleStyle: {
          color: "white",
          fontFamily: "Roboto",
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Explore" component={TripsList} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="Profile" component={ProfileView} />

      <Screen
        name="Trip-details"
        options={({ route }) => {
          return {
            title: tripStore.getTripById(route.params._id).title,
          };
        }}
        component={TripDetails}
      />
      <Screen name="Trip-update" component={TripEditor} />
      <>
        <Screen
          name="Signin"
          component={SignInPage}
          options={{ headerShown: false }}
        />
        {/* <Screen name="Signup" component={SignUpPage} options={{headerShown: false}}  /> */}
      </>
    </Navigator>
  );
}
export default observer(Index);
