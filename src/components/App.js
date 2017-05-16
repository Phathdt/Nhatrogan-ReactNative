import React, { Component } from 'react';
import {
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import SignIn from './Authentication/SignIn.js';
import Main from './Main/Main.js';


export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Main' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'Main': return <Main navigator={navigator} />;
            case 'SignIn': return <SignIn navigator={navigator} />;
            default: return <SignIn navigator={navigator} />;

          }
        }}
      />
    );
  }
}
