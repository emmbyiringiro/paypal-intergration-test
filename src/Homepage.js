import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Homepage extends Component {
  static navigationOptions = {
    title: "Homepage"
    //tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text> Homepage </Text>
      </View>
    );
  }
}
