import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { SignInPage } from "../user/SignInPage";
// import { SignUpPage } from '../user/SignUpPage';
import { HelloWorldApp } from "../ph";
import TripsList from "../TripsList";
import TripDetails from "../TripDetails";
import userStore from "./../../stores/userStore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import Profile from "../Profile";

const { Navigator, Screen } = createNativeStackNavigator();

function Index() {
  const navigation = useNavigation();
  let isSignedIn = false;
  if (userStore.user) isSignedIn = true;
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      {isSignedIn ? (
        <>
          <Screen name="Hello" component={TripsList} />
          <Screen
            name="Trip-details"
            options={({ route }) => {
              return {
                title: tripStore.getTripById(route.params._id).title,
              };
            }}
            component={TripDetails}
          />
          <Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Screen
            name="Signin"
            component={SignInPage}
            options={{ headerShown: false }}
          />
          {/* <Screen name="Signup" component={SignUpPage} options={{headerShown: false}}  /> */}
        </>
      )}
    </Navigator>
  );
}
export default observer(Index);
