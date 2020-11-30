import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-elements";
import SvgUri from "react-native-svg-uri";

import { UserAvatar } from "./userComponents";

function Container(props) {
  const avatar = props.userAvatar;

  return (
    <View style={styles.body}>
      <View style={{ flexDirection: "row" }}>
        <UserAvatar />
        <TouchableOpacity onPress={props.AddVocabCardTarget}>
          <Text style={styles.textInput}>Create vocabulary card</Text>
        </TouchableOpacity>
      </View>
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
    width: 200,
    borderRadius: 17,
    paddingLeft: 17,
    marginLeft: 17,
    textAlignVertical: "center",
    fontSize: 16,
    color: "#333333",
  },
});

export { Container };
