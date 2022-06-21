// import React from 'react';
// import { Text, Image, View, StyleSheet, TouchableOpacity,TextInput,Alert } from 'react-native'
// import { useState } from 'react';
// import userStore from '../../stores/userStore'

// export function SignUpPage() {
//     const [userName, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [showError,setShowError] = useState(false);

//     const handleSignup = () => {
//         let user = {
//             username: userName,
//             password: password
//         }
//         userStore.signup(user,setShowError);
//       };
//   return (
// <View style={styles.container}>
// <View style={styles.inputView}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Enter Username"
//     placeholderTextColor="#003f5c"
//     onChangeText={(userName) => setUsername(userName)}
//   />
// </View>
 
// <View style={styles.inputView}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Enter Passsword"
//     placeholderTextColor="#003f5c"
//     secureTextEntry={true}
//     onChangeText={(password) => setPassword(password)}
//   />
// </View>

// <TouchableOpacity onPress={handleSignup} style={styles.loginBtn}>
//   <Text style={styles.loginText}>signup</Text>
// </TouchableOpacity>

// </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//       },
//     inputView: {
//         backgroundColor: "#19d90f",
//         borderRadius: 30,
//         width: "90%",
//         height: 45,
//         marginBottom: 20,
//         alignItems: "center",
        
//       },
      
//       TextInput: {
//         height: 50,
//         flex: 1,
//         padding: 10,
//         marginLeft: 20,
//       },
//       loginBtn:
//  {
//    width:"80%",
//    borderRadius:25,
//    height:50,
//    alignItems:"center",
//    justifyContent:"center",
//    marginTop:40,
//    backgroundColor:"#0faad9",
//  }
// });
