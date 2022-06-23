import React from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { Card, ListItem, Icon, Button } from "react-native-elements";

import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import user from "../stores/userStore";
import { Divider } from "native-base";
function TripDetails({ route, navigation: { navigate } }) {
  const trip = route.params;

  const AuthorizedButtons = () => {
    if (user.user._id == trip.owner) {
      return (
        <View style={styles.tripButtons}>
          <Button
            title="Update"
            style={{ marginHorizontal: 20 }}
            onPress={() => {
              navigate("Trip-update", trip._id);
            }}
          />
          <Button
            title="Delete"
            style={{ marginHorizontal: 20 }}
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
          <Card.Divider />
          <View style={styles.tripContainer}>
            <Text style={styles.tripTitle}>{trip.title}</Text>
            <Image style={styles.tripImage} source={{ uri: trip.image }} />
            <Card.Divider />
            <Text style={styles.tripDescription}>{trip.description}</Text>
            <Card.Divider />
            <AuthorizedButtons />
          </View>
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
    width: "100%",
    height: 500,
  },
  tripDescription: {
    fontSize: 30,
    marginHorizontal: 10,
  },
  tripButtons: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default observer(TripDetails);
