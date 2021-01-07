/* eslint-disable react/prop-types */
import React,{ Component } from 'react';
import { TouchableOpacity,StyleSheet, Text,Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  
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



export default class SortScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
    <View style={styles.container}>
      <View style={{marginTop:30}}></View>
      <View style={styles.frame}>
      
        
      </View>
    </View>
  );
  }
}
SortScreen.navigationOptions={  
  tabBarIcon:({tintColor, focused})=>(  
    <Image style={{opacity:focused ? 1:0.2}}
    source={require('../../../../assete/image/sort.png')}/> 
    
  )  
}  

const styles = StyleSheet.create({
  container:{
  flex: 1,
  alignContent: 'center',
  justifyContent : 'flex-start',
  backgroundColor:colors.bright,
  paddingHorizontal:20,
  // padding:30
  },
  frame:{
    width:'90%',flexDirection:'row',
    alignItems:'center',justifyContent:'space-between',
    paddingVertical:10
  },
  label:{
    color:colors.black,fontSize:fontsize.label
  }
});