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
import { Card, ListItem, Icon } from "react-native-elements";
import { observer } from "mobx-react";
import { Divider } from "react-native-elements/dist/divider/Divider";

function EditProfile() {
  const [bio, onChangeBio] = useState();
  const [image, onChangeImage] = useState();
  const user = userStore.user;
  const profile = profileStore.getProfileById(user._id);

  // const handleChange = (event) => {
  //   setProfile({ ...profile, [event.target.name]: event.target.value });
  // };
  const handleSubmit = () => {
    const update = { bio: bio, image: image };
    if (image !== "") {
      profile.image = image;
    }
    profileStore.updateProfile(update, profile._id);
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
          placeholder="Enter your Bio"
        />
        <Card.Divider />
        <Card.Title>Image</Card.Title>
        <TextInput
          style={styles.input}
          onChangeText={onChangeImage}
          value={image}
          placeholder="Image URL"
        />

        <Card.Divider />
        <View>
          <Button title="Done" onPress={handleSubmit} />
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
export default EditProfile;
