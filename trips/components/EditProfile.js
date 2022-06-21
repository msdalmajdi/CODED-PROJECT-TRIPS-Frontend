import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import profileStore from "../stores/profileStore";

export default function EditProfile() {
  const [bio, onChangeBio] = React.useState();
  const [image, onChangeImage] = React.useState();
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
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          alignItems: "center",
          marginLeft: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Image</Text>
        <TextInput
          style={{
            width: 200,
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            textAlign: "center",
          }}
          underlineColorAndroid="transparent"
          placeholder="Image uri"
          name="image"
          autoCapitalize="none"
          onChangeText={{}}
        />
        <Text
          style={{
            fontSize: 20,
            color: "black",
            paddingHorizontal: 10,
            marginTop: 10,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          edit bio
        </Text>
        <TextInput
          style={{
            width: 200,
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            textAlign: "center",
          }}
          underlineColorAndroid="transparent"
          placeholder="Enter your bio"
          name="bio"
          autoCapitalize="none"
          onChangeText={{}}
        />
        <TouchableOpacity
          onPress={() => {
            handleSubmit;
          }}
        >
          <Text
            style={{
              backgroundColor: "blue",
              height: 30,
              fontSize: 20,
              color: "white",
              paddingHorizontal: 20,
              marginTop: 20,
              fontWeight: "bold",
              marginBottom: 10,
              borderWidth: 1,
              textAlign: "center",
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
