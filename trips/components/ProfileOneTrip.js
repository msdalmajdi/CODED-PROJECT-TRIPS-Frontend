import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
import { FlipInEasyX } from "react-native-reanimated";
import tripStore from "../stores/tripStore";
import { useNavigation } from "@react-navigation/native";

function ProfileOneTrip({ trip }) {
  const navigation = useNavigation();
  const TripDetails = tripStore.trips.find((triip) => triip._id == trip);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Trip-details", TripDetails);
        }}
      >
        <Image
          style={styles.tripLogo}
          source={{ uri: TripDetails.image }}
        ></Image>
      </TouchableOpacity>

      {/* <Text style={styles.tripTitle}>{trip.title}</Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  tripLogo: {
    width: 150,
    height: 150,
  },
  tripTitle: {
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "bold",
    // marginHorizontal: 10,
    marginTop: 10,
  },
});
export default observer(ProfileOneTrip);
