import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableOpacityBase,
} from "react-native";
import SvgUri from "react-native-svg-uri";

import Search from "../shared/search";

function Container(props) {
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={props.AddVocabCardTarget}>
        <Text style={({ color: "dodgerblue" }, styles.textInput)}>
          Create vocabulary card
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.searchTarget}>
        <SvgUri source={require("../../assets/image/search.svg")}></SvgUri>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: 70,
    width: 370,
    maxHeight: 1000,
    backgroundColor: "#F2F2F2",
    borderRadius: 17,
    paddingLeft: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
    bottom: 0,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: "#A3A8AF",
    height: 35,
    width: 250,
    borderRadius: 17,
    paddingLeft: 17,
    textAlignVertical: "center",
    fontSize: 16,
    color: "#333333",
  },
});

export { Container };
