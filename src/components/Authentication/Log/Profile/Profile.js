/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Button
} from 'react-native';
const URL = 'http://nhatrogan.com/api/v1/me';
const Token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTE1MjVhMGY1NGFkZjAwMjAxZTZjYTEiLCJleHAiOjE0OTYzNDA4NzMsImlhdCI6MTQ5NTczNjA3M30.0KIDLXs16309sV6luaVOkj5RiEv_Y4SAhJ7iVgm7lV8'
export default class Profile extends Component {
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
    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+Token
      }})
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
      <TouchableOpacity onPress={() => this.props.backList()}>
        <View >
        <View >
          <Text>{row.name}</Text>
          <Text> SDT: {row.phone} </Text>
          <Text>{row.email}</Text>
        </View>

        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Profile component</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => this.taoHang(row)}
        />
        <Button
          onPress={this.props.gotoAddPost}
          title="Add Post"
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
