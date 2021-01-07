import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import welcomePage from './screen/welcomePage';
import numberPage from './screen/number1';

const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
  welcomePage: { screen: welcomePage}, 
    //First entry by default be our first screen if we do not define initialRouteName
    numberPage: { screen: numberPage}, 
  },
  {
    initialRouteName: 'welcomePage',
  }
);


export default createAppContainer(App);
