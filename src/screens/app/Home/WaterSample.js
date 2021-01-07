/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {StatusBar,ScrollView,View, StyleSheet,AsyncStorage, Image, TouchableOpacity } from 'react-native';
// import Itemframe from '../../../components/Itemframe';
import Insight from '../../../components/Insight';
import Performance from '../../../components/Performance';
import {
  Container,
  TitleText,
  TextInput,
  DarkButton,
  LongText,
  timeline,
  home,
  Shadow,
  Text,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../../shared';
import { fontsize, titles } from '../../../shared/constants';
// import { FlexCentered, Text } from '../../shared/styledComponents';

export default class WaterSample extends Component {
  render() {
    return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.frm1}>
        <TitleText color={colors.black}>{'You have drank\n3 glasses today'}</TitleText>
      </View>
      <View style={styles.frm2}>
        <Image source={require('../../../../assete/image/water_full.png')}/>
        <Image source={require('../../../../assete/image/water_full.png')}/>
        <Image source={require('../../../../assete/image/water_full.png')}/>
        <Image source={require('../../../../assete/image/water_blank.png')}/>
      </View>
      <View style={styles.frm2}>
        <Image source={require('../../../../assete/image/water_blank.png')}/>
        <Image source={require('../../../../assete/image/water_blank.png')}/>
        <Image source={require('../../../../assete/image/water_blank.png')}/>
        <Image source={require('../../../../assete/image/water_blank.png')}/>
      </View>
      <View style={styles.frm3}>
          <View>
            <Text color={colors.black}>250ml</Text>
            <Text color={colors.grey}>Water Drank</Text>
          </View>
          <View>
            <Text color={colors.black}>8 glass</Text>
            <Text color={colors.grey}>Daily Goal</Text>
          </View>
      </View>
      <View style={styles.frm4}>
        <View style={{flexDirection:'row'}}>
            <Text color={colors.red}>
              You haven't drank much.
            </Text>
            <Text color={colors.red} style={{textDecorationLine: 'underline'}}>
              Set reminder
            </Text>
        </View>
        <Image source={require('../../../../assete/icon/close.png')}/>
      </View>
        <View style={{paddingHorizontal:20}}>
          <View style={{alignItems:'flex-start',paddingVertical:20}}>
            <Text color={colors.black} style={{fontWeight:'bold'}}>Insight</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:10}}>
            <Insight val={0.5} label='M'/>
            <Insight val={1} label='T'/>
            <Insight val={1} label='W'/>
            <Insight val={0.5} label='T'/>
            <Insight val={0} label='F'/>
            <Insight val={0.8} label='S'/>
            <Insight val={0} label='S'/>  
          </View>
        </View>
          <View>
            <Performance
                photo={require('../../../../assete/icon/best.png')}
                msg='Best Performance' day='Monday' val={10} flag={false}/>
            <Performance
                photo={require('../../../../assete/icon/worst.png')}
                msg='Worst Performance' day='Wednesday' val={6} flag={false}/>
          </View>

          </ScrollView>
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
  frm1:{alignItems:'center',paddingHorizontal:30,paddingVertical:30},
  frm2:
    {width:'100%',flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:10,
    paddingHorizontal:30}
  ,
  frm4: {width:'100%',flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.backred,
        paddingVertical:10,
        paddingHorizontal:10},

  frm3: {width:'100%',flexDirection:'row',
        justifyContent:'space-around',
        paddingVertical:10,
        paddingHorizontal:30},      
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