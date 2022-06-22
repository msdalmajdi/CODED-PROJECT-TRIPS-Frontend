import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import React from "react";
import profileStore from "../stores/profileStore";
import { useNavigation } from "@react-navigation/native";
import userStore from "../stores/userStore";
import { observer } from "mobx-react";
function Profile() {
  const navigation = useNavigation();
  if (profileStore.isLoading) return <Text>Loading</Text>;
  const user = userStore.user;
  const profile = profileStore.getProfileById(user._id);
  // let numOfTrips = profileStore.getNumOfTrips(profile._id);
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
            uri: profile.image,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              color: "#199EF3",
              paddingHorizontal: 20,
              fontWeight: "600",
            }}
          >
            {profileStore.getNumOfTrips(profile._id)}
          </Text>
          <Text
            style={{
              fontSize: 20,
              paddingHorizontal: 10,
              marginLeft: 24,
              color: "grey",
              fontFamily: "Roboto",
            }}
          >
            Trips
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
          marginBottom: 5,
          fontFamily: "Roboto",
        }}
      >
        {profile.user.username}
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: "black",
          paddingHorizontal: 10,
          marginBottom: -10,
          fontFamily: "Roboto",
        }}
      >
        {profile.bio}
      </Text>
      <TouchableOpacity
        style={styles.EditBtn}
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
      >
        <Text style={styles.EditText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
export default observer(Profile);
const styles = StyleSheet.create({
  EditBtn: {
    marginLeft: 40,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6FB6F6",
    fontFamily: "Roboto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  EditText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Roboto",
  },
});
