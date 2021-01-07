import { createStackNavigator } from 'react-navigation-stack';
import { View, ScrollView,StyleSheet,Image, Text, TouchableOpacity } from 'react-native';
import React,{Component} from 'react';
import { Profile, Invite, Myprofile,Sharedme,Sharedothers, Settings, Help } from '../screens';
import { fontsize, titles, colors } from '../shared/constants';
import { stackOptionsOff, stackOptionsOn } from '../utils';

const ProStack = createStackNavigator(
  {
    
    Profile: {
      screen: Profile,
      navigationOptions: stackOptionsOff("")
    },
    Sharedme: {
      screen: Sharedme,
      navigationOptions: {
        title:
             <Text style={{fontSize:fontsize.label,fontWeight:'bold'}}>Shared with me</Text>
         ,
        headerRight:(
          <View style={{paddingRight:20}}>
        <Image source={require('../../assete/image/photo.png' )} style={{width:40,height:40,borderRadius:40}}/>
         </View>),
        headerStyle: {
          backgroundColor: colors.creamy,
        },
      }
    },
    Sharedothers: {
      screen: Sharedothers,
      navigationOptions: {
        title:
             <Text style={{fontSize:fontsize.label,fontWeight:'bold'}}>Shared with others</Text>
         ,
        headerRight:(
          <View style={{paddingRight:20}}>
        <Image source={require('../../assete/image/photo.png' )} style={{width:40,height:40,borderRadius:40}}/>
         </View>),
         headerStyle: {
          backgroundColor: colors.creamy,
        },
      }
    },
    Myprofile: {
      screen: Myprofile,
      navigationOptions: stackOptionsOn("")
    },
    Invite: {
      screen: Invite,
      navigationOptions: stackOptionsOn("")
    },
    Settings: {
      screen: Settings,
      navigationOptions: stackOptionsOn("")
    },
    Help: {
      screen: Help,
      navigationOptions: stackOptionsOn("")
    },

  },
  {
    initialRouteName: 'Profile',
  }

);

export default ProStack;