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
  const [profile, setProfile] = React.useState({
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    bio: "",
  });
  //   const handleChange = (event) => {
  //     setProfile({ ...profile, [event.target.name]: event.target.value });
  //   };
  const handleSubmit = (event) => {
    event.preventDefault();
    profileStore.updateProfile(profile);
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
          onChangeText={(img) => setProfile({ ...profile, image: img })}
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
          onChangeText={(biio) => setProfile({ ...profile, bio: biio })}
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
            {" "}
            Update{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
