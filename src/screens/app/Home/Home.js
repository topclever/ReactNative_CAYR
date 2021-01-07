/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {StatusBar,View, StyleSheet,AsyncStorage, Image,Text, TouchableOpacity } from 'react-native';
import Itemframe from '../../../components/Itemframe';
import {
  Container,
  Centered,
  TextInput,
  DarkButton,
  LongText,
  timeline,
  home,
  Shadow,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../../shared';
import { fontsize, titles } from '../../../shared/constants';
// import { FlexCentered, Text } from '../../shared/styledComponents';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
     
      <View style={styles.container}>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {colors.creamy} translucent = {true}/>
        <View style={styles.frm1}>
          <Text color={colors.black} 
            style={styles.font1}>{home.title1}</Text>
        </View>

        <View style={styles.frm2}>
          <Text style={styles.font2}>{timeline.msg1}</Text>
          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.font3}>Click here</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.frm3}>
          <Itemframe
            img={require('../../../../assete/image/item4.png')}
            label='Nutrition'
            max={1200} step={1}/>
        </View>
        <View style={{alignItems:'center'}}> 
          <Image source={require('../../../../assete/image/arrow2.png')}/>
          <Text style={styles.font4}>{home.msg1}</Text>
        </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
  flex: 1,
  alignContent: 'center',
  justifyContent :'flex-start',
  backgroundColor:colors.creamy,
  // paddingHorizontal:20,
  // padding:30
  },
  frm1:{alignItems:'flex-start',paddingHorizontal:30,paddingVertical:30},
  frm2:{
    width:'100%',flexDirection:'row',
    alignItems:'center',justifyContent:'space-between',
    backgroundColor:colors.bakcdark,
    paddingVertical:20,
    paddingHorizontal:20,
  },
  frm3:{
    // width:'100%',
    flexDirection:'row',
    // alignItems:'center',justifyContent:'space-between',
    
    paddingVertical:20,
    // paddingHorizontal:20,
  },
  font1:{fontSize:fontsize.label,textAlign:'left',fontWeight:'bold'},
  font2:{ color:colors.dark,fontSize:fontsize.text },
  font3:{ color:colors.bright,fontSize:fontsize.button },
  font4:{ color:colors.grey,fontSize:fontsize.button },
  
  label:{
    width:'90%',alignItems:'flex-start',paddingLeft:20,paddingVertical:10
  },
  btn1:{
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:colors.dark,
  },
});