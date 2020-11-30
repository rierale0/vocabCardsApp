import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";

import FlashMessage from "react-native-flash-message";

import { VocabCard } from "../shared/vocabCard";
import { Container } from "../shared/container";
import { AddVocabCard } from "../shared/addVocabCard";
import firebase from "../../database/firebase";

const Home = (props) => {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    firebase.db
      .collection("vocabCards")
      .orderBy("timeStamp", "desc")
      .onSnapshot((querySnapshot) => {
        const vocabCardsBundle = [];
        querySnapshot.docs.forEach((doc) => {
          const { phrase, reprogrammingLevel, pronunciationLevel } = doc.data();
          vocabCardsBundle.push({
            id: doc.id,
            phrase,
            reprogrammingLevel,
            pronunciationLevel,
          });
        });

        setPhrases(vocabCardsBundle);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ backgroundColor: "#2C526B" }}>
        <Container
          AddVocabCardTarget={() =>
            props.navigation.navigate("Create vocabulary card")
          }
          searchTarget={() => props.navigation.navigate("Search")}
        />

        {phrases.map((phrase) => {
          return (
            <VocabCard
              key={phrase.id}
              idProp={phrase.id}
              text={phrase.phrase}
              reprogramming={phrase.reprogrammingLevel}
              pronunciation={phrase.pronunciationLevel}
            />
          );
        })}
      </ScrollView>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C526B",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    bottom: 0,
  },
});

export default Home;
