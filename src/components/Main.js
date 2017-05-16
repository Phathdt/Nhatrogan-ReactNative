import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Header from './Header.js';

export default class Main extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Hello Main </Text>
      </View>
    );
  }
}
