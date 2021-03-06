/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Image,
  Button
} from 'react-native';
const URL ='http://nhatrogan.com/api/v1/filter?district=';
const URL2 ='http://nhatrogan.com/api/v1/filter?district=640&pricing=2'

export default class List extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(URL + this.props.id + '&pricing=' + this.props.pricing)
    // fetch(URL2)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson)
        });
      })
    .done();
  }

  taoHang(row) {
    return (
      <TouchableOpacity onPress={() => this.props.gotoDetail(row._id)}>
        <View style={styles.list}>
          <View style={styles.image}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: row.images }}
            />
          </View>
        <View style={styles.detail}>
          <Text style={styles.title}>{row.title}</Text>
          <Text>{row.pricing} trieu dong</Text>
          <Text>{row.area} m2</Text>
        </View>

        </View>
      </TouchableOpacity>

    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.backQuan()}
          title='Tro ve chon Quan'
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => this.taoHang(row)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
list: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 4,
    marginRight: 4,
    padding: 4,
    borderBottomWidth: 5,
    borderColor: 'lightgray'
},
image: {
  flex: 1,
},
detail: {
 flex: 3
},
title: {
  color: '#e74c3c'
}
});
