import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import { FlipInEasyX } from "react-native-reanimated";

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

function OneTripExplore({ trip }) {
  return (
    <>
    <View style={styles.container}>
      <Image style={styles.tripLogo} source={{ uri: trip.image }}></Image>
      <Text style={styles.tripTitle}>{trip.title}</Text>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems: "center",
    height:500,
  },
  tripLogo: {
    width: "100%",
    height: 500,
    position: "absolute"
  },
  tripTitle: {
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "bold",
    // marginHorizontal: 10,
    // marginTop: "50%",
    // marginBottom: "50%",
  },
  titleContainer:{
    width: "100%",
    alignItems:"center",
    paddingBottom:20,
  }
});
export default observer(OneTripExplore);
