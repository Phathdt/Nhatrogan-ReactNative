import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import SignIn from '../../../Authentication/Log/SignIn/SignIn.js';
import SignUp from '../../../Authentication/Log/SignUp/SignUp.js';
import Profile from '../../../Authentication/Log/Profile/Profile.js';
import AddPost from './AddPost.js';

import { Navigator } from 'react-native-deprecated-custom-components';
// import saveToken from '../../../../api/saveToken';
export default class User extends Component {
  static navigationOptions = {
   tabBarLabel:
   <Image
    style={{ width: 50, height: 50 }}
    source={require('../../../../images/ic_person_white_48dp_1x.png')}
  />
   };
  renderScene(route, navigator) {
   switch (route.name) {
     case 'SignIn': return (<SignIn
        gotoProfile={() => navigator.push(
          {
            name: 'Profile'
          }
        )}
        gotoSignUp={() => navigator.push(
          {
            name: 'SignUp'
          }
        )}
      />
    );
     case 'SignUp': return (<SignUp
       gotoProfile={() => navigator.push(
         {
           name: 'Profile'
         }
       )}
       gotoSignIn={() => navigator.push(
         {
           name: 'SignIn'
         }
       )}
     />
     );
     case 'Profile': return (<Profile
       gotoAddPost={() => navigator.push(
         {
           name: 'AddPost'
         }
       )}
     />
     );
     case 'AddPost': return (<AddPost
       gotoProfile={() => navigator.push(
         {
           name: 'Profile'
         }
       )}
     />);
     default: return null;
   }
 }
 render() {
    return (
      <Navigator
        initialRoute={{ name: 'SignIn' }}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ECFDF',
  },
  profile: {
        width: 150,
        height: 150,
        borderRadius: 60,
        marginVertical: 100,
        alignItems: 'center'
    },
    btnstyle: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btntext: {
      color: '#34B089',
      fontSize: 15
    }
});
