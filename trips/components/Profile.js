import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import profileStore from "../stores/profileStore";
import { useNavigation } from "@react-navigation/native";
import profi from "../profileData";
export default function Profile() {
  const navigation = useNavigation();
  const profile = profileStore.profiles;
  let p = profile[0];
  console.log(p);
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
          marginTop: 20,
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
          }}
          source={{
            uri: p.image,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              color: "blue",
              paddingHorizontal: 20,
              fontWeight: "600",
            }}
          >
            10
          </Text>
          <Text
            style={{
              fontSize: 20,
              paddingHorizontal: 10,
              marginLeft: 20,
              color: "grey",
            }}
          >
            Trip
          </Text>
        </View>
      </View>
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
        {p.user.username}
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: "black",
          paddingHorizontal: 10,
          marginBottom: 20,
        }}
      >
        {p.bio}
      </Text>
      <TouchableOpacity
        style={{
          alignItems: "center",
          padding: 10,
        }}
        onPress={() => navigation.navigate("EditProfile")}
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
          Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  bio: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
