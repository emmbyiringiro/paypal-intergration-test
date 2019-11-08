import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PayPalPayment from './PayPalPayment';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Login </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Homepage')}>
          <Text>HOMEPAGE</Text>
        </TouchableOpacity>
        <PayPalPayment />
      </View>
    );
  }
}
