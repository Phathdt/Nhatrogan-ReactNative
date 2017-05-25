import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import { Container, Content, Picker, Text, Input, Form } from 'native-base';

const URL = 'http://nhatrogan.com/auth/login';
const Token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTE1MjVhMGY1NGFkZjAwMjAxZTZjYTEiLCJleHAiOjE0OTYzNDA4NzMsImlhdCI6MTQ5NTczNjA3M30.0KIDLXs16309sV6luaVOkj5RiEv_Y4SAhJ7iVgm7lV8'

export default class SignIn extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: true,
        };
    }
  checkSignIn() {
    var details = {
      'email': this.state.email,
      'password': this.state.password,
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
        'Authorization': 'Bearer '+Token
      },
      body: formBody
    })
    .then((response) => response.json())
    .then((responseJson) => {
      { responseJson.message ? this.setState({ isLogin: false}) : this.setState({ isLogin: true})}
    })
    this.props.gotoProfile();

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.isLogin}</Text>
        <Input
              placeholder="email"
              onChangeText={
                (email) => this.setState({ email })}
                value={this.state.email}
            />
        <Input
              placeholder="password"
              secureTextEntry={true}
              onChangeText={
                (password) => this.setState({ password })}
                value={this.state.password}
        />

        { this.state.isLogin ? <Text> </Text>: <Text>Sai id/ pass</Text> }
        <Button
          onPress={() => { this.checkSignIn() }}
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
