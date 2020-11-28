import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import FlashMessage from "react-native-flash-message";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Home from "./app/components/screens/Home";
import CreateVocabCard from "./app/components/screens/CreateVocabCard";
import VocabCardDetails from "./app/components/screens/VocabCardDetails";
import { SearchScreen } from "./app/components/screens/SearchScreen";
import { SearchBarComponent } from "./app/components/shared/searchBar";
import SvgUri from "react-native-svg-uri";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {
            color: "#333333",
          },
        }}
      />
      <Stack.Screen
        name="Create vocabulary card"
        component={CreateVocabCard}
        options={{
          headerTitleStyle: {
            color: "#333333",
          },
          headerBackImage: (props) => (
            <SvgUri
              style={{ marginLeft: 8 }}
              source={require("./app/assets/image/backIconBlack.svg")}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen name="VocabCardDetails" component={VocabCardDetails} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerTitle: (props) => <SearchBarComponent {...props} />,
          headerBackImage: (props) => (
            <SvgUri
              style={{ marginLeft: 8 }}
              source={require("./app/assets/image/backIconBlack.svg")}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
