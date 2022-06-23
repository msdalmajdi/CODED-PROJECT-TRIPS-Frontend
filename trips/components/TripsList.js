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
      <>
      <TouchableOpacity key={trip._id}
        onPress={() => {
          navigate("Trip-details", trip);
        }}
      >
        
          <OneTripExplore trip={trip} />
        
      </TouchableOpacity>
      <View style={styles.border}>

      </View>
    </>
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{tripsList}</ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  border:{
    borderBottomWidth:10,
    
    borderBottomColor: "white",
  }

});
export default observer(TripsList);
