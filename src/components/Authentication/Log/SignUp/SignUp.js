import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Content, Picker, Input, Form } from 'native-base';
export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SignUp component</Text>
        <Input
              placeholder="name"
              onChangeText={
                (name) => this.setState({ name })}
                value={this.state.name}
              />
        <Input
              placeholder="email"
              onChangeText={
                (email) => this.setState({ email })}
                value={this.state.email}
        />
        <Input
              placeholder="password"
              onChangeText={
                (password) => this.setState({ password })}
                value={this.state.password}
        />
        <Input
              placeholder="phone"
              onChangeText={
                (phone) => this.setState({ phone })}
                value={this.state.phone}
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
