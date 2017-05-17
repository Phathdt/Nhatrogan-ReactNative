import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class User extends Component {
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
        <Text>I'm the User component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
