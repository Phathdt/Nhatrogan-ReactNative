import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SignUp component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
