import React,{Component} from 'react';
import { View, ScrollView,StyleSheet,Image, Text, TouchableOpacity } from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';  
import {colors, messages,DarkButton,WhiteButton,Shadow, buttons,TextInput,routes} from '../../../../shared';
import { fontsize, titles } from '../../../../shared/constants';
import SortScreen from './SharedmeSort';
import FilterScreen from './SharedmeFilter';

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

export default class Sharedme extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
      
      // <View style={styles.container}>
      <AppIndex/>
      // </View>
      
    );
  }
}

const styles = StyleSheet.create({
  
  container:{
    flex:1, alignItems:'center',justifyContent:'space-between',
    backgroundColor:colors.creamy
  },
  frm1:{width:'100%',justifyContent:'flex-start',paddingLeft:30,paddingTop:20},
  frm2:{width:'100%',justifyContent:'flex-start',paddingLeft:30},
  
  font1:{color:colors.black,fontSize:fontsize.label},

  font2:{color:colors.black,fontSize:fontsize.button},
  
})