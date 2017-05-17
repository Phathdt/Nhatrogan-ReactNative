import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class SignIn extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SignIn component</Text>
        <Button
          onPress={() => this.props.navigation.navigate('SignUp')}
          title="Go to SignUp"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
