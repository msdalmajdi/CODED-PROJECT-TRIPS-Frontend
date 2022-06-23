import React from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TimePickerAndroid,
  TouchableOpacity,
} from "react-native";

import { Card, ListItem, Icon, Button } from "react-native-elements";

import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import tripStore from "../stores/tripStore";
import profileStore from "../stores/profileStore";
import user from "../stores/userStore";
import { Divider } from "native-base";
import profile from './../profileData';
import userStore from './../stores/userStore';



function TripDetails({ route, navigation: { navigate } }) {
const navigation = useNavigation();
  const trip = route.params;
  console.log(user.allUsers)
  const userProfile = profileStore.getProfileById(trip.owner)
  const userData = userStore.getUserById(trip.owner)
  // console.log(userOriginal[0].username)
  const navigateToProfile = () => {
    
  }
  const DeleteButton = () => {
    if (user.user._id == trip.owner) {
      return (
        <View style={styles.tripButtons}>
          <Button
            title="Update"
            onPress={() => {
              navigate("Trip-update", trip._id);
            }}
          />
          <Button
            title="Delete"
            onPress={() => {
              tripStore.deleteTrip(trip._id);

              navigate("Explore");
            }}
          />
        </View>
      );
    } else {
      return <></>;
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Card>
              <TouchableOpacity style={styles.profileClickable} onPress={()=> navigation.navigate("ProfileView",trip.owner)}>
              <View style={styles.profileClickable}>
            <Image style={ styles.profileImage} source={{ uri: userProfile.image }} />
              <Text style={styles.tripTitle}>{userData.username}</Text>
              </View>
              </TouchableOpacity>

            <Card.Divider />
            <View style={styles.tripContainer}>
              <Image style={styles.tripImage} source={{ uri: trip.image }} />
              <Card.Divider />
              <Text style={styles.tripTitle}>{trip.title}</Text>
              <Card.Divider />
              <Text style={styles.tripDescription}>{trip.description}</Text>
              <Card.Divider />
              <DeleteButton />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tripTitle: {
    fontSize: 40,
    marginHorizontal: 10,
  },
  tripContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tripImage: {
    width: 340,
    height: 500,
  },
  tripDescription: {
    fontSize: 30,
    marginHorizontal: 10,
  },
  tripButtons: {
    flex:1,
    width:"100%",
    justifyContent:"space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  profileClickable:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  profileImage:{
    height: 100,
            width: 100,
            borderRadius: 50,
            marginBottom:10,
            marginRight:10,
  },
});
export default observer(TripDetails);
