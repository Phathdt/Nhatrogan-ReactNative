import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import { Container, Content, Picker, Text, Input, Form } from 'native-base';

const URL = 'http://nhatrogan.com/api/v1/me';
const Token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTE1MjVhMGY1NGFkZjAwMjAxZTZjYTEiLCJleHAiOjE0OTYzNDA4NzMsImlhdCI6MTQ5NTczNjA3M30.0KIDLXs16309sV6luaVOkj5RiEv_Y4SAhJ7iVgm7lV8'

export default class SignIn extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
  checkSignIn() {
    fetch('http://nhatrogan.com/auth/login',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
         email: this.state.email,
         password: this.state.password,
       })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      Token = responseJson;
    })
    .done();
    this.props.gotoProfile();
  }
  render() {
    return (
      <View style={styles.container}>
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
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
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
