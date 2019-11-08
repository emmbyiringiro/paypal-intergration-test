import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Setting extends Component {
  static navigationOptions = {
    title: "Setting"
    //tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Setting </Text>
      </View>
    );
  }
}
