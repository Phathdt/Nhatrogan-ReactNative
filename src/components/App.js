import React, { Component } from 'react';
import {
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import LogIn from './LogIn.js';
import Main from './Main.js';
import NearMe from './NearMe.js';
import Notification from './Notification.js';
import Search from './Search.js';
import SignUp from './SignUp.js';
import User from './User.js';


export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Main' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'Main': return <Main navigator={navigator} />;
            case 'LogIn': return <LogIn navigator={navigator} />;
            case 'NearMe': return <NearMe navigator={navigator} />;
            case 'Notification': return <Notification navigator={navigator} />;
            case 'Search': return <Search navigator={navigator} />;
            case 'SignUp': return <SignUp navigator={navigator} />;
            case 'User': return <User navigator={navigator} />;
            case 'Header': return <Header navigator={navigator} />;
            default: return <User navigator={navigator} />;

          }
        }}
      />
    );
  }
}
