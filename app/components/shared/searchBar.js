import React from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

export default class SearchBarComponent extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        platform="android"
        cancelIcon={false}
        searchIcon={false}
        placeholderTextColor="#333333"
        containerStyle={{
          height: "90%",
          paddingLeft: -20,
          marginLeft: -40,
        }}
        inputStyle={{
          backgroundColor: "#F2F2F2",
          borderRadius: 20,
          paddingLeft: 15,
        }}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

export { SearchBarComponent };
