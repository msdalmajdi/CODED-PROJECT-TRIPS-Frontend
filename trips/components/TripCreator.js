import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

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
import {
  ALERT_TYPE,
  Dialog,
  Root,
  Toast,
} from "react-native-alert-notification";

let imageUri = null;

import user from "../stores/userStore";
function TripCreator({ navigation: { navigate } }) {
  const [title, onChangeTitle] = useState("");
  const [image, onChangeImage] = useState("");
  const [description, onChangeDescription] = useState("");

  const handleUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    const file = await FileSystem.uploadAsync(
      "http://172.20.10.2:8095/api/trips/trip-image",
      result.uri
    );
    imageUri = file.body;
  };

  const handleSubmit = () => {
    const send = {
      title: title,
      description: description,
      owner: user.user._id,
    };
    if (imageUri !== "") {
      send.image = imageUri;
    }
    tripStore.createTrip(send, setShowSuccessCreate, setShowErrorCreate);
    handleClear();
  };

  const handleClear = () => {
    onChangeTitle("");
    onChangeDescription("");
    onChangeTitle("");
  };

  const [showSuccessCreate, setShowSuccessCreate] = useState(false);
  const [showErrorCreate, setShowErrorCreate] = useState(false);
  const finishCreation = () => {
    setShowSuccessCreate(false);
    navigate("Explore");
  };

  return (
    <Root>
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
          <Button color="#6FB6F6" title="Upload" onPress={handleUpload} />

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
        {showSuccessCreate ? (
          (Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: "Trip Created",
            textBody: "Thanks",
            button: "close",
          }),
          finishCreation())
        ) : (
          <></>
        )}

        {showErrorCreate ? (
          (Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: "Wrong Information",
            textBody: "Please Enter correct stuff",
            button: "close",
          }),
          setShowErrorCreate(false))
        ) : (
          <></>
        )}
      </View>
    </Root>
  );
}
const styles = StyleSheet.create({
  container: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#6FB6F6",
  },
  buttonSubmit: {},
  buttonCancel: {},
});
export default observer(TripCreator);
