import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import userStore from '../stores/userStore'


export function HelloWorldApp() {
  const handleSignout = () => {
    userStore.signout();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <TouchableOpacity onPress={handleSignout}>
  <Text >Signout</Text>
</TouchableOpacity>
    </View>
  )
}
