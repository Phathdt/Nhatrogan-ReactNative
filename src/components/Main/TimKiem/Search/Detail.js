/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  Button
} from 'react-native';

const URL = 'http://nhatrogan.com/api/v1/posts';

export default class Detail extends Component {
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
    fetch(URL + '/' + this.props.id)
      .then((response) => response.json())
      .then((responseJson) => {
        const DATA = [];
        DATA.push(responseJson);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(DATA)
        });
      })
    .done();
  }

  taoHang(row) {
    return (
      <View >
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: row.images }}
          />
        </View>
      <View >
        <Text style={styles.title}>{row.title}</Text>
        <Text style={styles.gia}> Gia: {row.pricing} </Text>
        <Text>Dien tich: {row.area}</Text>
        <Text>{row.shortDescription}</Text>
      </View>
    </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => this.taoHang(row)}
        />
        <Button
          onPress={() => this.props.backQuan()}
          title="Quay ve chon Quan"
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
  gia : {
    color : '#2ecc71'
  },
  title: {
    color: '#e74c3c'
  }
});
