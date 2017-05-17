import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';

const Authentication = StackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
});

export default Authentication;
