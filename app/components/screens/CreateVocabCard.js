import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Avatar } from "react-native-elements";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../database/firebase";

import { UserAvatar, UserName } from "../shared/userComponents";
import { CollectionDropdown, PrivacyDropdown } from "../shared/dropdown";

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
        reprogrammingLevel: "0",
        pronunciationLevel: "0",
        author: "own",
        timeStamp: Date.now(),
      });

      alert("saved");
      props.navigation.navigate("Home");
    }
  };
  return (
    <View style={styles.body}>
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "white",
          alignItems: "center",
          paddingLeft: 10,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <UserAvatar size="medium" />
        <UserName
          style={{
            paddingLeft: 14,
            bottom: 17,
            fontSize: 20,
            fontWeight: "bold",
            color: "#333333",
          }}
        />
        <PrivacyDropdown />
        <CollectionDropdown />
      </View>

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
