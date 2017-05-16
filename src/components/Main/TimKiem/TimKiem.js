import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Icon } from 'native-base';
//import het js trong chuc nang tim kiem
import Home from './Home/Home.js';
import NearMe from './NearMe/NearMe.js';
import Notification from './Notification/Notification.js';
import Search from './Search/Search.js';
import User from './User/User.js';

export default class TimKiem extends Component {
  render() {
    return (
      <View>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home"
            renderIcon={() => <Icon name='home' />}
            renderSelectedIcon={() => <Icon name='home' />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home"
            renderIcon={() => <Icon name='home' />}
            renderSelectedIcon={() => <Icon name='home' />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home1"
            renderIcon={() => <Icon name='home' />}
            renderSelectedIcon={() => <Icon name='home' />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home2"
            renderIcon={() => <Icon name='home' />}
            renderSelectedIcon={() => <Icon name='home' />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home3"
            renderIcon={() => <Icon name='home' />}
            renderSelectedIcon={() => <Icon name='home' />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
