import React, { Component } from 'react';
import {
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import LogMain from './Authentication/LogMain.js';
import Main from './Main/Main.js';


export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Authentication' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'TimKiem': return <Main navigator={navigator} />;
            case 'Authentication': return <LogMain navigator={navigator} />;
            default: return <LogMain navigator={navigator} />;

          }
        }}
      />
    );
  }
}
