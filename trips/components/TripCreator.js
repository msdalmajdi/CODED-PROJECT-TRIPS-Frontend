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

import user from "../stores/userStore";
function TripCreator({ navigation: { navigate } }) {
  const [title, onChangeTitle] = useState("");
  const [image, onChangeImage] = useState("");
  const [description, onChangeDescription] = useState("");
  // let file
  const handleUpload = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync();
  //   // onChangeImage(result.uri);
  //   // console.log(image)
  //   file = await FileSystem.uploadAsync('http://192.168.43.154:8095/api/trips/trip-image',result.uri);
  //   // onChangeImage(file.body)
  //   console.log(file.body)
  //   onChangeImage(file.body)
  //   onChangeImage(file.body)

  //   // console.log(image)
  }


  const handleSubmit = () => {

    const send = {
      title: title,
      description: description,
      owner: user.user._id,
    };
    if (image !== "") {
      send.image = image;
    }
    tripStore.createTrip(send);
    handleClear();
    navigate("Explore");
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
        <Button color="blue" title="Upload" onPress={handleUpload} />
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
          <Button title="Submit" onPress={handleSubmit} />
          <Divider />
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 20,
            }}
          />
          <Button color="#FF2400" title="Clear" onPress={handleClear} />
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
  },
  buttonSubmit: {},
  buttonCancel: {},
});
export default observer(TripCreator);
