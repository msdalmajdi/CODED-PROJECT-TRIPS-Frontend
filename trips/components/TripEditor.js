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
import { Card, ListItem, Icon } from "react-native-elements";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import { FlipInEasyX } from "react-native-reanimated";
import { Divider } from "react-native-elements/dist/divider/Divider";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import {
  ALERT_TYPE,
  Dialog,
  Root,
  Toast,
} from "react-native-alert-notification";
let imageUri = null;

import user from "../stores/userStore";
function TripEditor({ route, navigation: { navigate } }) {
  const editedTrip = tripStore.getTripById(route.params);
  const [title, onChangeTitle] = useState(editedTrip.title);
  const [image, onChangeImage] = useState(editedTrip.image);
  const [description, onChangeDescription] = useState(editedTrip.description);

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
    tripStore.updateTrip(
      editedTrip._id,
      send,
      setShowSuccessCreate,
      setShowErrorCreate
    );
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
  };
  return (
    <Root>
      <View style={styles.container}>
        <Card>
          <Card.Title>Edit your Trip</Card.Title>
          <Card.Divider />
          <Card.Title>Title</Card.Title>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
            placeholder={editedTrip.title}
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
            placeholder={editedTrip.description}
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
        {showSuccessCreate ? (
          (Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: "Trip Edited",
            textBody: "",
            button: "Hide",
          }),
          finishCreation())
        ) : (
          <></>
        )}

        {showErrorCreate ? (
          (Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: "Editing Failed",
            textBody: "Please fix your inputs",
            button: "Hide",
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
    borderColor: "#6FB6F6",

    padding: 10,
  },
  buttonSubmit: {},
  buttonCancel: {},
});
export default observer(TripEditor);
