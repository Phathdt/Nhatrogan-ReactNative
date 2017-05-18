
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';

// const { height } = Dimensions.get('window');

export default class Header extends Component {
  Search() {

  }
  render() {
    return (
      <View style={styles.wrap} >
        <View style={styles.icon}>
          <Image
          style={{ width: 40, height: 40 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          />
        </View>
        <View style={styles.text}>
          <Text>Nha tro gan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'powderblue',
  },
  icon: {
    flex: 1
  },
  text: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
