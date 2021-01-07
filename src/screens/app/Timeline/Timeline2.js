/* eslint-disable react/prop-types */
import React,{ Component } from 'react';
import { TouchableOpacity,StyleSheet, Text,Image, View } from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';  
import {createStackNavigator} from 'react-navigation-stack';
import SortScreen from './SortScreen';
import FilterScreen from './FilterScreen';

import {
  Container,
  Centered,
  TextInput,
  DarkButton,
  LongText,
  // Text,
  Shadow,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../../shared';
import { FlexCentered,  } from '../../../shared/styledComponents';
import { fontsize } from '../../../shared/constants';

const TabNavigator = createMaterialTopTabNavigator(  
  {  
      Sort: SortScreen,  
      Filter: FilterScreen,  
        
  },  
  {  
      tabBarOptions: {  
          activeTintColor:colors.black,  
          inactiveTintColor:colors.grey,
          pressColor:colors.bakcdark,
          upperCaseLabel: false,
          showIcon: true,  
          showLabel:false,  
          tabStyle:{
            // width:100,
            borderLeftWidth:0.5,
            borderLeftColor:colors.grey
          },
          style: {  
               backgroundColor:colors.bright  
          },
          labelStyle:{fontSize:fontsize.button},
          indicatorStyle:{
            backgroundColor : colors.dark
          }  
      },  
  }  
)  
const AppIndex = createAppContainer(TabNavigator)  

export default class Timeline2 extends Component {
  render() {
      
    return (
    <View style={styles.container}>
      {/* <View style={{marginTop:30}}></View> */}
      <View style={styles.frame}>
        <Text style={styles.label}>Your Timeline</Text>
        <Image source={require('../../../../assete/image/photo.png')}
              style={{width:60,height:60,borderRadius:30}}/>
      </View>
      <AppIndex/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
  flex: 1,
  alignContent: 'center',
  justifyContent : 'flex-start',
  backgroundColor:colors.creamy,
  // paddingHorizontal:20,
  // padding:30
  },
  frame:{
    flexDirection:'row',
    alignItems:'center',justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:20

  },
  label:{
    color:colors.black,fontSize:fontsize.label,fontWeight:'bold'
  }
});