import { createStackNavigator } from 'react-navigation-stack';

import {
  Welcome,
  Number1,
  Number2,
  Continue,
  StartPage,
  Fullname,
  SignIn,
  SignUp,
  SignUp2,
  ForgetPassword,
  ConfirmPassword,
  ConfirmSignUp,
} from '../screens';

import { stackOptionsOff, stackOptionsOn} from '../utils';
import { titles } from '../shared';

const AuthStack = createStackNavigator({
  Welcome:{
    screen: Welcome,
     navigationOptions: stackOptionsOff("")
  },
  Number1:{
    screen: Number1,
    navigationOptions: stackOptionsOn(""),
  },
  Number2:{
    screen: Number2,
    navigationOptions: stackOptionsOn(""),
  },
  Continue:{
    screen: Continue,
    navigationOptions: stackOptionsOn(""),
  },
  StartPage:{
    screen: StartPage,
    navigationOptions: stackOptionsOff("")
  },
  Fullname:{
    screen: Fullname,
    navigationOptions: stackOptionsOn("")
  },
  
  SignIn: {
    screen: SignIn,
    navigationOptions: stackOptionsOn(titles.login),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: stackOptionsOn(''),
  },
  SignUp2: {
    screen: SignUp2,
    navigationOptions: stackOptionsOn(''),
  },
  ConfirmSignUp: {
    screen: ConfirmSignUp,
    navigationOptions: stackOptionsOn(titles.confirm),
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: stackOptionsOn(titles.forget),
  },
  ConfirmPassword: {
    screen: ConfirmPassword,
    navigationOptions: stackOptionsOn(titles.newPassword),
  },
});

export default AuthStack;
