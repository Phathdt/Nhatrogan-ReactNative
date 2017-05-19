import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

const URL = 'http://nhatrogan.com/api/v1/posts';

export default class List extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
      text: '',
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    // console.log(URL);
    // const id = '591529c8c930b352e4f4c20e';
    // console.log(id);
    // const temp = URL + '/'+ id ;
    // console.log(temp);
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
          <Text>{row.pricing}</Text>
          <Text>{row.area}</Text>
        </View>

        </View>
      </TouchableOpacity>

    );
  }
  render() {
    return (
      <View>
        <View style={{ paddingBottom: 55 }}>
          <Container>
              <Header searchBar rounded>
                  <Item>
                      <Input
                        placeholder="Search"
                        onChangeText={
                          (text) => this.setState({ text })}
                          value={this.state.text}
                      />
                      <TouchableOpacity>
                        <Icon name="ios-search" />
                      </TouchableOpacity>
                  </Item>
                  <Button transparent>
                      <Text>Search</Text>
                  </Button>
              </Header>
          </Container>
        </View>
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
