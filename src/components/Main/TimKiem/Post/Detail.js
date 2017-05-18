import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView
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
      <View>
        <Text>Hang 1</Text>
        <Text>{row._id}</Text>
        <Text>{row.title}</Text>
        <Text>{row.pricing}</Text>
        <Text>{row.area}</Text>
        <Text>{row.images}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.backList()}>
          <Text>I'm the Detail component</Text>
          <Text>{URL}{this.props.id}</Text>
        </TouchableOpacity>
        <Text>Dang tao listview</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => this.taoHang(row)}
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
