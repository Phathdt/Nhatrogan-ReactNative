
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';

const { height } = Dimensions.get('window');

export default class Header extends Component {
  Search() {

  }
  render() {
    return (
      <View style={styles.wrap} >
        <View style={styles.icon}>
          <Image
          style={{width: 40, height: 40}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
        </View>
        <View style={styles.text}>
          <Text>Nha tro gan</Text>
        </View>
        <View style={{ flex: 1, marginTop: 10 , marginRight: -20 }}>
          <TouchableOpacity onPress={this.Search}>
            <Icon name='ios-search' />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: height / 16,
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
