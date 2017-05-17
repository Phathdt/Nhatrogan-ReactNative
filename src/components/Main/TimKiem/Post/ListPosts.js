import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';

const URL = 'http://nhatrogan.com/api/v1/posts';

export default class ListPost extends Component {
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
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson)
        });
      })
    .done();
  }

  taoHang(props) {
    return (
      <View>
        <Text>{props.title}</Text>
        <Text>{props.pricing}</Text>
      </View>
    );
  }


  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.taoHang}
        />
      </View>
    );
  }
}
