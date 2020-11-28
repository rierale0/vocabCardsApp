import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import SvgUri from "react-native-svg-uri";

const Search = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.target}>
        <SvgUri source={require("../../assets/image/search.svg")}></SvgUri>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {},
});

export default Search;
