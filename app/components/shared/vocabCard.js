import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import { showMessage, hideMessage } from "react-native-flash-message";
import firebase from "../../database/firebase";
import { BottomSheet, Button, ListItem, Overlay } from "react-native-elements";
import { Value } from "react-native-reanimated";

const progress = {
  lvl0: require("../../assets/image/0.svg"),
  lvl1: require("../../assets/image/25.svg"),
  lvl2: require("../../assets/image/75.svg"),
  lvl3: require("../../assets/image/100.svg"),
};

function VocabCard(props) {
  const heart = {
    false: require("../../assets/image/heart.svg"),
    true: require("../../assets/image/hearted.svg"),
  };

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const list = [
    {
      title: "Edit",
      titleStyle: { color: "#333333" },
      iconStyle: { backgroundColor: "red", width: 10, height: 10 },
    },
    { title: "Delete", titleStyle: { color: "#333333" } },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "#F2F2F2" },
      titleStyle: { color: "#333333" },
      onPress: () => setShowBottomSheet(false),
    },
  ];

  const toggleBottomSheet = () => {
    setShowBottomSheet(!showBottomSheet);
  };

  const getVocabCardById = async (id) => {
    const deRef = firebase.db.collection("vocabCards").doc(id);
    const doc = await deRef.get();
    const vocabCard = doc.data();
  };

  const deleteVocabCard = async () => {
    const ref = props.idProp;
    const dbRef = firebase.db.collection("vocabCards").doc(ref);
    await dbRef.delete();
    toggleOverlay();
  };

  const [hearted, setHearted] = useState(false);
  const clickHandler = () => {
    setHearted((previousState) => !previousState);
    showMessage({
      message: hearted ? "Removed from Favorites" : "Added to Favorites",
      type: hearted ? "default" : "info",
    });
  };

  return (
    <TouchableNativeFeedback onLongPress={toggleBottomSheet}>
      <View style={styles.body}>
        {/* Overlay: Delete dialogue prompt */}
        <View>
          <Overlay
            overlayStyle={{ height: 170, width: "75%", borderRadius: 20 }}
            isVisible={visible}
            onBackdropPress={toggleOverlay}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
                top: 10,
                color: "#333333",
              }}
            >
              Are you sure?
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                top: 18,
                color: "#333333",
              }}
            >
              Do you really want to delete this vocabulary card?
            </Text>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                top: 30,
                justifyContent: "space-evenly",
              }}
            >
              <Button
                buttonStyle={{
                  backgroundColor: "gray",
                  width: 120,
                }}
                title="Cancel"
                onPress={toggleOverlay}
              />
              <Button
                buttonStyle={{
                  backgroundColor: "#EB5757",
                  width: 120,
                }}
                title="Delete"
                onPress={() => deleteVocabCard()}
              />
            </View>
          </Overlay>
        </View>
        <View>
          <BottomSheet isVisible={showBottomSheet}>
            {list.map((l, i) => (
              <ListItem
                key={i}
                containerStyle={l.containerStyle}
                onPress={l.onPress}
              >
                <ListItem.Content>
                  <ListItem.Content style={l.iconStyle} />
                  <ListItem.Title style={l.titleStyle}>
                    {l.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>
        </View>

        <View style={{ width: "80%" }}>
          <Text style={styles.phrase}>{props.text}</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.heart} onPress={clickHandler}>
            <SvgUri source={hearted ? heart.true : heart.false} />
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalContainer1}>
          <SvgUri
            style={(styles.icon, styles.speaker)}
            source={require("../../assets/image/speaker.svg")}
          ></SvgUri>
          <SvgUri
            style={(styles.icon, styles.mic)}
            source={require("../../assets/image/mic.svg")}
          ></SvgUri>
          <SvgUri
            style={(styles.icon, styles.details)}
            source={require("../../assets/image/details.svg")}
          ></SvgUri>
        </View>
        <View style={styles.horizontalContainer2}>
          <View style={{ alignItems: "center" }}>
            <SvgUri source={progress[props.pronunciation]} />
            <Text style={{ fontSize: 12 }}>Pronunciation</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <SvgUri source={progress[props.reprogramming]} />
            <Text style={{ fontSize: 12 }}>Reprogramming</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    width: 370,
    height: 185,
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  phrase: {
    color: "#333333",
    fontSize: 27,
    fontWeight: "bold",
    paddingTop: 16,
    height: 80,
  },
  horizontalContainer1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
    top: -15,
    left: 10,
  },
  horizontalContainer2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
  },
  icon: {
    position: "absolute",
  },
  heart: {
    left: 305,
    top: -60,
  },
  bar: {
    height: 9,
    width: 90,
    borderRadius: 4.5,
  },
});

export { VocabCard };
