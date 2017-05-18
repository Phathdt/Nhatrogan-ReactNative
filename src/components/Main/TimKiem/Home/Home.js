import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import List from '../Post/List';
import Detail from '../Post/Detail';

export default class Home extends Component {

  // navigator
  // doi hinh anh lai
  static navigationOptions = {
   tabBarLabel:
   <Image
    style={{ width: 50, height: 50 }}
    source={require('../../../../images/ic_home_white_48dp_1x.png')}
   />,
  };

  renderScene(route, navigator) {
    switch (route.name) {
      case 'list': return (
        <List
          gotoDetail={(a) => {
            navigator.push({
              name: 'detail',
              thamso: { id: a }
            });
        }}
        />
      );
      case 'detail': return (
        <Detail
          backList={() => {
            navigator.pop();
          }}
          id={route.thamso.id}
        />
        );
      default: return null;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'list' }}
        renderScene={this.renderScene}
      />
    );
  }
}
