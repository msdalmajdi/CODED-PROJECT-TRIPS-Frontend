import React from "react";
import profileStore from "../stores/profileStore";
import userStore from "../stores/userStore";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Button,
} from "react-native";
import { Card } from "react-native-elements";
import { observer } from "mobx-react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

let imageUri = null


function EditProfile() {
  const [bio, onChangeBio] = useState();
  const [image, onChangeImage] = useState();
  if (profileStore.isLoading) return <Text>Loading</Text>;
  const navigation = useNavigation();
  const user = userStore.user;
  const profile = profileStore.getProfileById(user._id);

  const handleUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    // onChangeImage(result.uri);
    // console.log(image)
    const file = await FileSystem.uploadAsync('http://192.168.150.146:8095/api/trips/trip-image',result.uri);
    // console.log(file.body)
    imageUri = file.body;
    // console.log(imageUri)
  }


  const handleSubmit = () => {
    const update = { bio: bio, image: imageUri };
    profileStore.updateProfile(update, profile._id);
    navigation.navigate("Profile");
  };
  
  const handleClear = () => {
    onChangeBio("");
    onChangeImage("");
  };
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Edit Your Profile</Card.Title>
        <Card.Divider />
        <Card.Title>Bio</Card.Title>
        <TextInput
          style={styles.input}
          onChangeText={onChangeBio}
          value={bio}
          placeholder={profile.bio}
        />
        <Card.Divider />
        <Card.Title>Image</Card.Title>
          <Button title="Upload" color="#199EF3" onPress={handleUpload} />
        <Card.Divider />
        <View>
          <Button title="Done"  color="#6FB6F6" onPress={handleSubmit} />
          <Divider />
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 20,
            }}
          />
          <Button color="#C6C9CC" title="Clear" onPress={handleClear} />
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor:"#6FB6F6",
    padding: 10,
    
  },
});
export default observer(EditProfile);
