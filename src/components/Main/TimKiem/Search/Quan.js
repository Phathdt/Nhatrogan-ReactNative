import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Button
} from 'react-native';

const URL = 'http://nhatrogan.com/api/data/districts';

export default class Quan extends Component {
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

  fetchData(){
    fetch(URL)
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
      // <TouchableOpacity onPress={() => this.props.gotoList(row.id)}>
      //   <Text>{row.title}</Text>
      //   <Text>{row.pricing}</Text>
      //   <Text>{row.area}</Text>
      //   <Text>{row.images}</Text>
      //   <Text>{URL}/{row._id}</Text>
      // </TouchableOpacity>
      <Button
        onPress={() => this.props.gotoList(row.id)}
        title= {row.name}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.gotoList('1')} >
        </TouchableOpacity>
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
