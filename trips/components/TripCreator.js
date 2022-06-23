import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Button,
} from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import { FlipInEasyX } from "react-native-reanimated";
import { Divider } from "react-native-elements/dist/divider/Divider";

let imageUri = null


import user from "../stores/userStore";
function TripCreator({ navigation: { navigate } }) {
  const [title, onChangeTitle] = useState("");
  const [image, onChangeImage] = useState("");
  const [description, onChangeDescription] = useState("");

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
    // console.log(imageUri)
    const send = {
      title: title,
      description: description,
      owner: user.user._id,
    };
    if (imageUri !== "") {
      send.image = imageUri;
    }
    tripStore.createTrip(send);
    handleClear();
    navigate("Home");
  };

  const handleClear = () => {
    onChangeTitle("");
    onChangeDescription("");
    onChangeTitle("");
  };
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Create your Trip</Card.Title>
        <Card.Divider />
        <Card.Title>Title</Card.Title>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitle}
          value={title}
          placeholder="title..."
        />
        <Card.Divider />
        <Card.Title>Image</Card.Title>
        <Button color="#199EF3" title="Upload" onPress={handleUpload} />
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeImage}
          value={image}
          placeholder="URL..."
        /> */}
        <Card.Divider />
        <Card.Title>Description</Card.Title>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="Descripe your trip..."
        />
        <Card.Divider />
        <Card.Divider />
        <View>
          <Button title="Submit" color="#6FB6F6" onPress={handleSubmit} />
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
  container: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#6FB6F6', 
  },
  buttonSubmit: {},
  buttonCancel: {},
});
export default observer(TripCreator);
