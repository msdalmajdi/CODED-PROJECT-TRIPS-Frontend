import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity,TextInput,ImageBackground,Alert,Button  } from 'react-native'
import { useState } from 'react';
import userStore from '../../stores/userStore'
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification'

export function SignInPage({navigation}) {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorup,setShowErrorup] = useState(false);
    const [showErrorin,setShowErrorin] = useState(false);


    const handleSignup = () => {
      let user = {
          username: userName,
          password: password
      }
      userStore.signup(user,setShowErrorup);
    };
    
    const handleSignin = () => {
        let user = {
            username: userName,
            password: password
        }
        userStore.signin(user,setShowErrorin);
      };

  return (
    <Root>
<View style={styles.container}>
  <ImageBackground  source={{uri:'https://media.cntraveler.com/photos/5e7c23955cd3cb0009ca95a1/7:10/w_2093,h_2990,c_limit/PodcastRoadtrips-2020-GettyImages-888361900.jpg'}}  
  style={styles.backgroundImage}/>

  <View style={styles.welcomeView}>
  <Text style={styles.welcomeText}>Welcome!</Text>
  </View>

<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter Username"
    placeholderTextColor="#003f5c"
    onChangeText={(userName) => setUsername(userName)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter Passsword"
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>

{/* <TouchableOpacity>
  <Text style={styles.forgotButton}>Forgot Password?</Text>
</TouchableOpacity> */}



<TouchableOpacity onPress={handleSignup} style={styles.signupBtn}>
  <Text style={styles.signupText}>Signup</Text>
</TouchableOpacity>

<Text style ={styles.askText} >Already have an account?</Text>

<TouchableOpacity onPress={handleSignin} style={styles.signinBtn}>
  <Text style={styles.signinText}>Signin</Text>
</TouchableOpacity>

{/* alert for the signup */}
{ showErrorup ? (
Toast.show({
  type: ALERT_TYPE.WARNING,
  title: 'Invalid',
  textBody: 'Username already exists, please enter a different username',
}),setShowErrorup(false)
  ) : (
    <>
    </>
  ) }


{/* alert for the signin */}

{ showErrorin ? (
 Toast.show({
  type: ALERT_TYPE.WARNING,
  title: 'Invalid',
  textBody: 'Username and Password combination is incorrect, please try again',
}),setShowErrorin(false)
  ) : (
    <>
    </>
  ) }

</View>
</Root>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    welcomeView: {
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 80,
    },
    welcomeText:{
      color:"white" ,
      fontSize: 40,
      fontWeight: "bold",
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: -1, height: 5},
      textShadowRadius: 10,
      fontFamily: "Roboto"
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "90%",
        height: 45,
        marginBottom: 20,
        borderColor: "black",
        borderWidth: 2,
      },
      backgroundImage:{
        position: "absolute",
        height: "100%",
        width: "100%"
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
       fontFamily: "Roboto",

      },
      forgotButton: {
        height: 30,
        marginBottom: 30,
      },
      signinBtn:
 {
   width:"40%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#6FB6F6",
   fontFamily: "Roboto",
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 12,
   },
   shadowOpacity: 0.58,
   shadowRadius: 16.00,
   
   elevation: 24,
 },
 signinText:{
  color:"white",
  fontWeight: "bold",
  alignSelf: "center",
  fontFamily: "Roboto",

 },
 signupBtn:
 {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#199EF3",
   fontFamily: "Roboto",
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 12,
   },
   shadowOpacity: 0.58,
   shadowRadius: 16.00,
   
   elevation: 24,
 },
 signupText:{
  color:"white",
  fontWeight: "bold",
  alignSelf: "center",
  fontFamily: "Roboto",

 },
 askText:{
  marginTop: 20,
  color:"white" ,
  fontSize: 20,
  fontWeight: "bold",
  textShadowColor: 'rgba(0, 0, 0, 1)',
  textShadowOffset: {width: -1, height: 5},
  textShadowRadius: 10,
  fontFamily: "Roboto"
 },
});
