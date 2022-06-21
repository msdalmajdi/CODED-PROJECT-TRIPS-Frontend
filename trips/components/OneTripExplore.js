import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import { FlipInEasyX } from "react-native-reanimated";
function OneTripExplore({ trip }) {
  return (
    <View style={styles.container}>
      <Image style={styles.tripLogo} source={{ uri: trip.image }}></Image>
      <Text style={styles.tripTitle}>{trip.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    // flexDirection: "row",
    alignItems: "center",
  },
  tripLogo: {
    width: 370,
    height: 500,
  },
  tripTitle: {
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "bold",
    // marginHorizontal: 10,
    marginTop: 10,
  },
});
export default observer(OneTripExplore);
