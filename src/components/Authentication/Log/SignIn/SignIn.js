import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  Image, TextInput
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
        <View style={styles.wrapper}>
            <Text>Dang nhap thong tin</Text>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder="Email"
                onChangeText={
                  (email) => this.setState({ email })}
                  value={this.state.email}
                placeholderTextColor="#FFF"
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.inputWrap}>
              <TextInput
                placeholderTextColor="#FFF"
                placeholder="Password"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={
                  (password) => this.setState({ password })}
                  value={this.state.password}
                  style={styles.inputStyle}
              />
            </View>
          </View>
        <Button
          onPress={() => { this.checkSignIn() }}
          title="Sign In Now"
        />
        <TouchableOpacity onPress={() => { this.props.gotoSignUp(); }}>
          <Text>Ban chua co tai khoan? Dang ki</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});
