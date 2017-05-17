import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Header from '../Header.js';

export default class Notification extends Component {
  // navigator
  // doi hinh anh lai
  static navigationOptions = {
   tabBarLabel:
   <Image
    style={{ width: 50, height: 50 }}
    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
  />,
   };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>I'm the Notification component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
