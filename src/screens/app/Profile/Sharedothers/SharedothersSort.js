import React,{Component} from 'react';
import { View, ScrollView,StyleSheet,Image, Text, TouchableOpacity } from 'react-native';
import {colors, messages,DarkButton,WhiteButton,Shadow, buttons,TextInput,routes} from '../../../../shared';
import { fontsize, titles } from '../../../../shared/constants';

export default class SharedothersSort extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
      <ScrollView>
      <View style={styles.container}>
        
      </View>
      </ScrollView>
    );
  }
}
SharedothersSort.navigationOptions={  
  tabBarIcon:({tintColor, focused})=>(  
    <Image style={{opacity:focused ? 1:0.2}}
    source={require('../../../../../assete/image/sort.png')}/> 
    
  )  
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