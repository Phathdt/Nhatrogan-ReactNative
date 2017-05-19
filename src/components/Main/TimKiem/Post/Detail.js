import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Image
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
      <TouchableOpacity onPress={() => this.props.backList()}>
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
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
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
  gia : {
    color : '#2ecc71'
  },
  title: {
    color: '#e74c3c'
  }
});
