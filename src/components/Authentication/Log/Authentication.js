import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';
import { Navigator } from 'react-native-deprecated-custom-components';

export default class Authentication extends Component{

  constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }

    gotoSignIn() {
        this.setState({ isSignIn: true });
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }
    render() {
      return (
        <View>
          <Text>HEllo</Text>
          { this.state.isSignIn ?  (
            <Text>True</Text>
          ) : (
            <Text>False</Text>
          ) }
        </View>
      );
  }

    //   return (
    //     <View >
    //       <Text>I'm the Authentication component</Text>
    //         if (isLogedIn) {
    //           <TouchableOpacity onPress={this.signIn.bind(this)}>
    //           <Text style={this.state.isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
    //           </TouchableOpacity>
    //         }
    //         else {
    //           <TouchableOpacity onPress={this.signIn.bind(this)}>
    //           <Text style={this.state.isSignIn ? inactiveStyle : activeStyle}>SIGN UP</Text>
    //           </TouchableOpacity>
    //         }
    //         {/* <TouchableOpacity onPress={this.signIn.bind(this)}>
    //         <Text style={this.state.isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity onPress={this.signIn.bind(this)}>
    //         <Text style={this.state.isSignIn ? inactiveStyle : activeStyle}>SIGN UP</Text>
    //         </TouchableOpacity> */}
    //
    //     </View>
    //   );
    // }
};
const styles = StyleSheet.create({
  inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3EBA77'
    },
});
