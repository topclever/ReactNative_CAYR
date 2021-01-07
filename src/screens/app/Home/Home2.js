/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {StatusBar,View, StyleSheet,AsyncStorage, Image, TouchableOpacity } from 'react-native';
import Itemframe from '../../../components/Itemframe';
import {
  Container,
  Centered,
  TextInput,
  DarkButton,
  LongText,
  Text,
  Shadow,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../../shared';
import { fontsize, titles } from '../../../shared/constants';
// import { FlexCentered, Text } from '../../shared/styledComponents';

export default class Home2 extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
     
      <View style={styles.container}>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {colors.creamy} translucent = {true}/>
        <View style={{marginTop:30}}></View>
        <View style={styles.label}>
          <Text color={colors.black} 
            style={{fontSize:fontsize.label,textAlign:'left',fontWeight:'bold'}}>{titles.grace}</Text>
        </View>

        <View style={styles.label}>
          <Text color={colors.black} 
            style={{fontSize:fontsize.button,textAlign:'left'}}>{messages.grace}</Text>
        </View>

        <View style={styles.label}>
          <Text color={colors.dark} 
            style={{fontSize:fontsize.text,textAlign:'left'}}>More details</Text>
        </View>

     <Itemframe
        img={require('../../../../assete/image/item1.png')}
        label='Blood Pressure'
        max={125} step={1}/>
     <Itemframe
        img={require('../../../../assete/image/item2.png')}
        label='Diabetes'
        max={100} step={0.5}/>
     <Itemframe
        img={require('../../../../assete/image/item3.png')}
        label='Daily Steps'
        max={10000} step={1}/>
        
      
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
  label:{
    width:'90%',alignItems:'flex-start',paddingLeft:20,paddingVertical:10
  }
});