import React, { Component, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Avatar from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const avatar =
  "https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg";

const name = "Jane Doe";

function UserAvatar(props) {
  const userAvatarSizeProps = props.size;
  const userAvatarStyle = props.avatarStyle;

  const getStyle = () => {
    if (userAvatarStyle != undefined) {
      let z = userAvatarStyle;
      return z;
    } else if (userAvatarSizeProps === "medium") {
      let z = styles.medium;
      return z;
    } else if (userAvatarSizeProps === "large") {
      let z = styles.large;
      return z;
    } else {
      let z = styles.small;
      return z;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => alert("Debes crear el UserProfile Screen")}
    >
      <Image
        style={getStyle()}
        source={{
          uri: avatar,
        }}
      />
    </TouchableOpacity>
  );
}

function UserName(props) {
  return <Text style={props.style}>{name}</Text>;
}

const styles = StyleSheet.create({
  small: { height: 40, width: 40, borderRadius: 30 },
  medium: { height: 60, width: 60, borderRadius: 30 },
  large: { height: 80, width: 80, borderRadius: 50 },
});

export { UserAvatar, UserName };
