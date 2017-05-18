import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import Header from '../Header.js';

export default class NearMe extends Component {
  // navigator
  // doi hinh anh lai
  static navigationOptions = {
   tabBarLabel:
   <Image
    style={{ width: 50, height: 50 }}
    source={require('../../../../images/ic_person_pin_circle_white_48dp_1x.png')}
  />,
   };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>I'm the NearMe component</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
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
