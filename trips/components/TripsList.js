import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import OneTripExplore from "./OneTripExplore";
function TripsList() {
  const tripsList = tripStore.trips.map((trip) => {
    return (
      <Card key={trip._id}>
        <OneTripExplore trip={trip} />
      </Card>
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
