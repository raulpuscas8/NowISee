import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CallActionBox from "../../components/CallActionBox";

const CallScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}></View>
      <CallActionBox />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#355C7D",
  },
  cameraPreview: {
    width: 100,
    height: 150,
    backgroundColor: "#F9CDAD",
    borderRadius: 10,
    position: "absolute",
    right: 10,
    top: 100,
  },
});

export default CallScreen;
