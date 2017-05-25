import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Button
} from 'react-native';
import { Container, Content, Picker, Text } from 'native-base';

const Item = Picker.Item
const Districts = [
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
const Money = [
  {
    pricing: "500.000 - 1.000.000 d",
    idPricing: 1,
  },
  {
    pricing: "1.000.000 - 1.500.000 d",
    idPricing: 2,
  },
  {
    pricing: "1.500.000 - 2.500.000 d",
    idPricing: 3,
  },
  {
    pricing: "2.500.000 - 3.000.000 d",
    idPricing: 4,
  },
  {
    pricing: "> 3.000.000 d",
    idPricing: 5,
  }
]

export default class Quan extends Component {
  constructor() {
    super();
    this.state = {
      idDistrict: '640',
      Districts: Districts,
      idPricing: 1,
      Pricing: Money,
    };
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
        onPress={() => this.props.gotoList(row.id, '1')}
        title= {row.name}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

    );
  }
  onValueChange (value: string) {
      this.setState({
          // value tra ve :v
          idDistrict: value
      });
  }
  onValueChange1 (value: string) {
      this.setState({
          // value tra ve :v
          idPricing: value,
      });
  }

  render() {
    return (
      <Container>
          <Content>
              <Picker
                  supportedOrientations={['portrait','landscape']}
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.idDistrict}
                  onValueChange={this.onValueChange.bind(this)}>
                  {this.state.Districts.map((data) => {
                    return <Item value={data.id} label={data.name} key={data.id} />
                  })}

             </Picker>

             <Picker
                 supportedOrientations={['portrait','landscape']}
                 iosHeader="Select one"
                 mode="dropdown"
                 selectedValue={this.state.idPricing}
                 onValueChange={this.onValueChange1.bind(this)}>
                 {this.state.Pricing.map((data) => {
                   return <Picker.Item value={data.idPricing} label={data.pricing} key={data.idPricing} />
                 })}

            </Picker>
            <Button
              onPress={() => this.props.gotoList(this.state.idDistrict, this.state.idPricing)}
              title='Tim kiem'
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </Content>
          {/* <Text>{this.state.districts.length}</Text> */}
      </Container>
    );
  }
}
