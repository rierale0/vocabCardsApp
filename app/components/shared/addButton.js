import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";

function AddButton(props) {
  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.button} onPress={props.target}>
        <SvgUri
          height="32"
          source={require("../../assets/image/addButton.svg")}
        ></SvgUri>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AddButton;
