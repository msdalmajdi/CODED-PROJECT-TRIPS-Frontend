import * as React from 'react';
import { useNavigation  } from '@react-navigation/native';
import { SignInPage } from '../user/SignInPage';
// import { SignUpPage } from '../user/SignUpPage';
import {HelloWorldApp} from '../ph';
import userStore from './../../stores/userStore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from "mobx-react";


const {Navigator,Screen} = createNativeStackNavigator();

 function Index() {
  const navigation = useNavigation();
  let isSignedIn = false
  if(userStore.user) isSignedIn = true
  return (
    <Navigator initialRouteName="List" screenOptions={{headerTitleAlign: 'center'}}>
   { isSignedIn ? (
     <Screen name="Hello" component={HelloWorldApp} />
  ) : (
    <>
    <Screen name="Signin" component={SignInPage} options={{headerShown: false}} />
    {/* <Screen name="Signup" component={SignUpPage} options={{headerShown: false}}  /> */}
    </>
  ) }
  </Navigator>

  )
}
export default observer(Index)
