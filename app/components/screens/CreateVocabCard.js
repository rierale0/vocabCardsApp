import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../database/firebase";

const CreateVocabCard = (props) => {
  const [state, setState] = useState({
    phrase: "",
  });

  const handleChangeText = (phrase, value) => {
    setState({ [phrase]: value });
  };

  const saveNewVocabCard = async () => {
    if (state.phrase === "") {
      alert("Please write something!");
    } else {
      await firebase.db.collection("vocabCards").add({
        phrase: state.phrase,
        reprogrammingLevel: "lvl0",
        pronunciationLevel: "lvl0",
        timeStamp: Date.now(),
      });

      alert("saved");
      props.navigation.navigate("Home");
    }
  };
  return (
    <View style={styles.body}>
      <TextInput
        multiline
        numberOfLines={4}
        maxLength={40}
        placeholder={"What's on your mind?"}
        style={{
          height: 200,
          borderColor: "#A3A8AF",
          borderBottomWidth: 0.5,
          fontSize: 50,
          textAlignVertical: "top",
          paddingLeft: 10,
          paddingTop: 10,
          fontWeight: "bold",
          color: "#333333",
        }}
        onChangeText={(value) => handleChangeText("phrase", value)}
      ></TextInput>
      <Button onPress={() => saveNewVocabCard()} title={"Add new"} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: 320,
    backgroundColor: "#f2f2f2",
    borderRadius: 17,
  },
  button: {
    position: "absolute",
    right: 22,
    bottom: 35,
  },
  back: {
    left: 15,
    top: 17,
  },
});

export default CreateVocabCard;
