import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import OneTripExplore from "./OneTripExplore";
function TripsList({ navigation: { navigate } }) {
  const tripsList = tripStore.trips.map((trip) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate("Trip-details", trip);
        }}
      >
        <OneTripExplore key={trip._id} trip={trip} />
      </TouchableOpacity>
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{tripsList}</ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default observer(TripsList);
