import React, { Component } from 'react';
import {
  Image
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import List from './List';
import Detail from './Detail';
import Quan from './Quan';

export default class Search extends Component {
  // navigator
  // doi hinh anh lai
  static navigationOptions = {
   tabBarLabel:
   <Image
    style={{ width: 50, height: 50 }}
    source={require('../../../../images/ic_search_white_48dp_1x.png')}
  />,
  };

  renderScene(route, navigator) {
    switch (route.name) {
      case 'quan': return (
        <Quan
          gotoList={(a, b) => {
            navigator.push({
              name: 'list',
              thamso: { id: a, pricing: b }
            });
        }}
        />
      );
      case 'list': return (
        <List
          backQuan={() => {
            navigator.pop();
          }}
          gotoDetail={(a) => {
            navigator.push({
              name: 'detail',
              thamso2: { id: a }
            });
          }}
          id={route.thamso.id}
          pricing={route.thamso.pricing}
        />
        );
      case 'detail': return (
        <Detail
          backQuan={() => {
            navigator.push({
              name: 'quan',
            });
          }}
          id={route.thamso2.id}
        />
        );
      default: return null;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'quan' }}
        renderScene={this.renderScene}
      />
    );
  }
}
