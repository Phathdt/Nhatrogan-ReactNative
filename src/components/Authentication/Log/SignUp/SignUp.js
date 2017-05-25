import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import { Container, Content, Picker, Input, Form } from 'native-base';
const URL = 'http://nhatrogan.com/auth/register'
export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          password: '',
          phone: '',
      };
  }
  dangky() {
    var details = {
      'name': this.state.name,
      'email': this.state.email,
      'password': this.state.password,
      'phone': this.state.phone,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Authorization': 'Bearer '+Token
      },
      body: formBody
    })
    // tra ve token, xu li ntn do linh
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   { responseJson.message ? this.setState({ isLogin: false}) : this.setState({ isLogin: true})}
    // })
    this.props.gotoProfile();
  }

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
        <Button
          onPress={() => { this.dangky() }}
          title="SignIn"
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
