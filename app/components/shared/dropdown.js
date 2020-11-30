import React, { useState } from "react";
import { View, StyleSheet, Image, Button, Text } from "react-native";
import { Picker } from "@react-native-community/picker";
import SvgUri from "react-native-svg-uri";
import { Input, Overlay } from "react-native-elements";
import { TouchableOpacity } from "react-native";

function PrivacyDropdown() {
  const [selectedValue, setSelectedValue] = useState("Public");
  return (
    <View style={styles.container}>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Public" value="Public" />
        <Picker.Item label="Only me" value="Only me" />
      </Picker>
    </View>
  );
}

function CollectionDropdown() {
  const [selectedValue, setSelectedValue] = useState("Public");
  const wantToCreateCollection = (n) => {
    if (n === "Create") {
      console.log("hey");
      createCollectionDialogue();
    } else {
      setSelectedValue(n);
    }
  };

  const createCollectionDialogue = () => {
    setVisible(!visible);
  };

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Overlay isVisible={visible} onBackdropPress={createCollectionDialogue}>
          <View style={{ width: 300, height: 100, backgroundColor: "white" }}>
            <Input></Input>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={() => setVisible(!visible)}>
                <View
                  style={{
                    width: 120,
                    height: 40,

                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 8,

                    backgroundColor: "#f2f2f2",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "800",
                      color: "#333333",
                    }}
                  >
                    Cancel
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("het")}>
                <View
                  style={{
                    width: 180,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 8,
                    backgroundColor: "#0099FF",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "800",
                      color: "white",
                    }}
                  >
                    Create new collection
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
      </View>

      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>
          wantToCreateCollection(itemValue)
        }
      >
        <Picker.Item label="Create" value="Create" color="#0099ff" />
        <Picker.Item label="x" value="Public" />
        <Picker.Item label="y" value="Only me" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

export { PrivacyDropdown, CollectionDropdown };
