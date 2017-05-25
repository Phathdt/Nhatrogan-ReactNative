/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  ToastAndroid,
  
} from 'react-native';
import { Container, Content, Picker, Input, Item , Label, Text} from 'native-base';
// const Item = Picker.Item
const URL = 'http://nhatrogan.com/api/v1/posts';
const Token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTE1MjVhMGY1NGFkZjAwMjAxZTZjYTEiLCJleHAiOjE0OTYzNDA4NzMsImlhdCI6MTQ5NTczNjA3M30.0KIDLXs16309sV6luaVOkj5RiEv_Y4SAhJ7iVgm7lV8'
const DATA = [
  {
  name: "Huyện Bình Chánh",
  id: 640
  },
  {
  name: "Huyện Cần Giờ",
  id: 642
  },
  {
  name: "Huyện Củ Chi",
  id: 638
  },
  {
  name: "Huyện Hóc Môn",
  id: 639
  },
  {
  name: "Huyện Nhà Bè",
  id: 641
  },
  {
  name: "Quận 1",
  id: 619
  },
  {
  name: "Quận 10",
  id: 630
  },
  {
  name: "Quận 11",
  id: 631
  },
  {
  name: "Quận 12",
  id: 620
  },
  {
  name: "Quận 2",
  id: 628
  },
  {
  name: "Quận 3",
  id: 629
  },
  {
  name: "Quận 4",
  id: 632
  },
  {
  name: "Quận 5",
  id: 633
  },
  {
  name: "Quận 6",
  id: 634
  },
  {
  name: "Quận 7",
  id: 637
  },
  {
  name: "Quận 8",
  id: 635
  },
  {
  name: "Quận 9",
  id: 622
  },
  {
  name: "Quận Bình Tân",
  id: 636
  },
  {
  name: "Quận Bình Thạnh",
  id: 624
  },
  {
  name: "Quận Gò Vấp",
  id: 623
  },
  {
  name: "Quận Phú Nhuận",
  id: 627
  },
  {
  name: "Quận Tân Bình",
  id: 625
  },
  {
  name: "Quận Tân Phú",
  id: 626
  },
  {
  name: "Quận Thủ Đức",
  id: 621
  }
]

export default class AddPost extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title: '',
          pricing: '',
          area: '',
          shortDescription: '',
          idDistrict: '640',
          districts: DATA,
      };
  }
  onValueChange ( value: string) {
      this.setState({
          idDistrict: value,
      });
  }
  dangBai() {
    var details = {
      'title': this.state.title,
      'pricing': this.state.pricing,
      'area': this.state.area,
      'shortDescription': this.state.shortDescription,
      'idDistrict': this.state.idDistrict
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer '+Token
      },
      body: formBody
    })
    this.props.gotoProfile()

  }
  render() {
    return (
      <Container>
          <Content>
            <Item floatingLabel>
                <Label>Tieu de</Label>
                <Input
                  onChangeText={
                    (title) => this.setState({ title })}
                    value={this.state.title}
                />
            </Item>
            <Item floatingLabel>
                <Label>Gia ( trieu dong/ thang)</Label>
                <Input
                  keyboardType='numeric'
                  onChangeText={
                    (pricing) => this.setState({ pricing })}
                    value={this.state.pricing}
                />
            </Item>
            <Item floatingLabel>
                <Label>dien tich(m^2)</Label>
                <Input
                  keyboardType='numeric'
                  onChangeText={
                    (area) => this.setState({ area })}
                    value={this.state.area}
                />
            </Item>
            <Item floatingLabel>
                <Label>short Description</Label>
                <Input
                  onChangeText={
                    (shortDescription) => this.setState({ shortDescription })}
                    value={this.state.shortDescription}
                />
            </Item>
              <Picker
                  supportedOrientations={['portrait','landscape']}
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.idDistrict}
                  onValueChange={this.onValueChange.bind(this)}>
                  {this.state.districts.map((data) => {
                    return <Picker.Item value={data.id} label={data.name} key={data.id} />
                  })}
             </Picker>
          </Content>
          <Button
            onPress={() => { this.dangBai() }}
            title="Dang bai"
          />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
