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

import user from "../stores/userStore";
function TripEditor({ route, navigation: { navigate } }) {
  console.log(route.params);
  const editedTrip = tripStore.getTripById(route.params);
  const [title, onChangeTitle] = useState(editedTrip.title);
  const [image, onChangeImage] = useState(editedTrip.image);
  const [description, onChangeDescription] = useState(editedTrip.description);

  const handleSubmit = () => {
    const send = {
      title: title,
      description: description,
      owner: user.user._id,
    };
    if (image !== "") {
      send.image = image;
    }
    console.log(send);
    console.log(editedTrip._id);
    tripStore.updateTrip(editedTrip._id, send);
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
        <TextInput
          style={styles.input}
          onChangeText={onChangeImage}
          value={image}
          placeholder="URL..."
        />
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
export default observer(TripEditor);
