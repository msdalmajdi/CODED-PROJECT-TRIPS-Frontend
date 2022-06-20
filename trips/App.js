import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import tripStore from "./stores/tripStore";
import TripsList from "./components/TripsList";
import TripCreator from "./components/TripCreator";
export default function App() {
  return (
    <View style={styles.exploreScreen}>
      <StatusBar style="auto" />
    </View>
  );
}
//<TripsList /> component ready to use
//<TripCreator /> component ready to use
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  exploreScreen: {
    marginTop: 50,
  },
});
