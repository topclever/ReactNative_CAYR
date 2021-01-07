import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import React, {Component} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {
  Home,
  Home2,
  WaterSample,
  StepSample,
  CalSample,
  Extract,
} from '../screens';

import {colors} from '../shared';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../../assete/icon/drawer.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 25, height: 25, marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.creamy,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Home2,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.creamy,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: WaterSample,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.creamy,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: StepSample,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.creamy,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: CalSample,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.creamy,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Extract,
    navigationOptions: ({navigation}) => ({
      title: 'Extracting Data',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.creamy,
      },
      headerTintColor: colors.black,
    }),
  },
});

const HomeStack = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home 1',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home 2',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'WaterSample',
    },
  },
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'StepSample',
    },
  },
  Screen5: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'CalSample',
    },
  },
  Screen6: {
    //Title
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Extract',
    },
  },
});

export default HomeStack;
