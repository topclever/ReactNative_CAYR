import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// eslint-disable-next-line no-unused-vars
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Addmodal} from '../screens';
import ProStack from './ProStack';
import RewardsStack from './RewardsStack';
import HomeStack from './HomeStack';
import TimelineStack from './TimelineStack';

import {colors} from '../shared';

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Timeline: {
      screen: TimelineStack,
    },
    Addmodal: {
      screen: Addmodal,
    },
    Rewards: {
      screen: RewardsStack,
    },
    Profile: {
      screen: ProStack,
    },
    // Settings
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          //  iconName = 'home.png';
          return (
            <Image
              source={require('../../assete/icon/home1.png')}
              focused={focused}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 50, height: 50, opacity: focused ? 1 : 0.2}}
            />
          );
        }
        if (routeName === 'Timeline') {
          return (
            <Image
              source={require('../../assete/icon/timeline1.png')}
              focused={focused}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 50, height: 50, opacity: focused ? 1 : 0.2}}
            />
          );
        }
        if (routeName === 'Addmodal') {
          return (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                position: 'absolute',
                bottom: 20, // space from bottombar
                height: 60,
                width: 60,
                borderRadius: 60,
                backgroundColor: colors.dark,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: colors.black,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4.65,
                elevation: 8,
              }}>
              <Image
                source={require('../../assete/icon/add.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 40,
                  height: 40,
                  tintColor: '#f1f6f9',
                  alignContent: 'center',
                }}
              />
            </View>
          );
        }
        if (routeName === 'Rewards') {
          return (
            <Image
              source={require('../../assete/icon/rewards1.png')}
              focused={focused}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 50, height: 50, opacity: focused ? 1 : 0.2}}
            />
          );
        }

        if (routeName === 'Profile') {
          return (
            <Image
              source={require('../../assete/icon/profile1.png')}
              focused={focused}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 50, height: 50, opacity: focused ? 1 : 0.2}}
            />
          );
        }
        //  return <IconComponent name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      labelStyle: {
        fontSize: 15,
        // font:'Footlight MT Light',
        textAlign: 'center',
      },
      tabStyle: {
        backgroundColor: colors.creamy,
        // height: 70,
        // paddingBottom: 10
      },
      activeTintColor: colors.black,
      // inactiveTintColor: colors.grey,
      activeBackgroundColor: colors.bright,
    },
  },
);

export default AppStack;
