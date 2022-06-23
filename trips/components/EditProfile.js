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

function EditProfile() {
  const [bio, onChangeBio] = useState();
  const [image, onChangeImage] = useState();
  if (profileStore.isLoading) return <Text>Loading</Text>;
  const navigation = useNavigation();
  const user = userStore.user;
  const profile = profileStore.getProfileById(user._id);
  const handleSubmit = () => {
    const update = { bio: bio, image: image };
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
        <TextInput
          style={styles.input}
          onChangeText={onChangeImage}
          value={image}
          placeholder={profile.image}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default observer(EditProfile);
