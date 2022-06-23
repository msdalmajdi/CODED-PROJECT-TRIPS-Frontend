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
      <View style={styles.titleContainer}>
      <Text style={styles.tripTitle}>{trip.title}</Text>
      </View>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    
    // flexDirection: "row",
    
    alignItems: "center",
    height:500,
    justifyContent: "flex-end"
  },
  tripLogo: {
    width: "100%",
    height: 500,
    position: "absolute"
  },
  tripTitle: {
    fontSize: 40,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color:"white",

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,

    // marginHorizontal: 10,
    // marginTop: "50%",
    // marginBottom: "50%",
  },
  titleContainer:{
    width: "100%",
    paddingLeft:50,
    paddingBottom:10,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    borderRadius:10
  }
});
export default observer(OneTripExplore);
