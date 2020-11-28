import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

import { BlurView } from "expo-blur";

function AddVocabCard() {
  return (
    <BlurView intensity={90} tint={"dark"} style={styles.body}>
      <View style={styles.child}></View>
    </BlurView>
  );
}
const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
  },
  child: {
    width: "90%",
    height: 350,
    backgroundColor: "dodgerblue",
  },
});

export { AddVocabCard };
