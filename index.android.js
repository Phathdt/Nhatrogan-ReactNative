import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src/components/App.js'

export default class Nhatrogan extends Component {
  render() {
        return <App />;
  }
}

AppRegistry.registerComponent('Nhatrogan', () => Nhatrogan);
