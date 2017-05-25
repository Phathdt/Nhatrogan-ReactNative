import { TabNavigator } from 'react-navigation';
//import het js trong chuc nang tim kiem
import Home from './Home/Home.js';
// import NearMe from './NearMe/NearMe.js';
// import Notification from './Notification/Notification.js';
import Search from './Search/Search.js';
import User from './User/User.js';

const TimKiem = TabNavigator({
  Home: {
    screen: Home,
  },
  // NearMe: {
  //   screen: NearMe,
  // },
  // Notification: {
  //   screen: Notification,
  // },
  Search: {
    screen: Search,
  },
  User: {
    screen: User,
  },
}, {
  tabBarPosition: 'bottom'
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
    showLabel: false,
  },
});

export default TimKiem;
