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
function TripDetails({ route }) {
  const trip = route.params;
  console.log(trip.title);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <View style={styles.tripContainer}>
              <Image style={styles.tripImage} source={{ uri: trip.image }} />
              <Text style={styles.tripDescription}>{trip.description}</Text>
              <Button title="VIEW NOW" />
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
  tripContainer: {},
  tripImage: {
    width: 75,
    height: 75,
  },
  tripDescription: {},
});
export default observer(TripDetails);
