/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {ScrollView,View, StyleSheet,AsyncStorage, Image,Text, TouchableOpacity } from 'react-native';
// import ProgressCircle from 'react-native-progress-circle'
import { BarChart, Grid } from 'react-native-svg-charts'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-ionicons'
// import { MultiArcCircle } from 'react-native-circles';
import Insight from '../../../components/Insight';
import Performance from '../../../components/Performance';

import {
  TitleText,
  colors,
  
  buttons,
} from '../../../shared';
import { fontsize, titles } from '../../../shared/constants';
// import { FlexCentered, Text } from '../../shared/styledComponents';

export default class StepSample extends Component {
  render() {
    const fill = 'rgb(134, 65, 244)'
    const data   = [ 50, 10, 40, 53, 4, 24, 0,
                    85, 0, 0, 35, 53, 53, 24, 50, 20, 36,
                    85, 0, 0, 35, 53, 53, 24, 50, 20, 24,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                   ]
    return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.frm1}>
        <TitleText color={colors.black}>{'You have walked\n7,235 steps today'}</TitleText>
      </View>
      <View style={styles.frm2}>
          <AnimatedCircularProgress
            size={200}
            width={15}
            fill={72}
            rotation={-130}
            tintColor={colors.dark}
            backgroundColor="#ddd">
            {
              (fill) => (
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                      <Image source={require('../../../../assete/image/item3.png')}/>
                      <Text style={{ color:colors.black,fontSize: 20,fontWeight:'bold' }}>{fill}%</Text>
                      <Text style={{ color:colors.grey,fontSize: 16 }}>{'of daily goals'}</Text>
                    </View>
              </View>
              )
            }
            </AnimatedCircularProgress>
      </View>
      <View style={styles.frm3}>
          <View style={styles.frm2}>
            <Text style={styles.font2}>1,300 cal</Text>
            <Text style={styles.font3}>Cal Burned</Text>
          </View>
          <View style={{justifyContent:'center',borderColor:colors.grey,width:0.5,height:'50%',borderWidth:1}}>
          </View>
          <View style={styles.frm2}>
            <Text style={styles.font2}>10,000</Text>
            <Text style={styles.font3}>Daily Goal</Text>
          </View>
      </View>
      <View style={{paddingHorizontal:20}}>
          <View style={{alignItems:'flex-start'}}>
            <Text color={colors.black} style={{fontSize:fontsize.button,fontWeight:'bold'}}>Statistic</Text>
          </View>
          <BarChart
                    style={{ height: 150,}}
                    data={ data }
                    svg={{ fill }}
                    // spacingInner={0.1}
                    // spacingOuter={10}
                    contentInset={{ top: 30, bottom: 0 }}
                >
                    {/* <Grid/> */}
          </BarChart>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Image source={require('../../../../assete/icon/sun.png')}/>
            <Text style={styles.font3}>6AM</Text>
            <Text style={styles.font3}>12PM</Text>
            <Text style={styles.font3}>6PM</Text>
            <Image source={require('../../../../assete/icon/moon.png')}/>
          </View>
      </View>
      <View style={{paddingHorizontal:20}}>
          <View style={{alignItems:'flex-start',paddingVertical:20}}>
            <Text color={colors.black} style={{fontSize:fontsize.button,fontWeight:'bold'}}>Insight</Text>
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
                msg='Best Performance' day='Monday' val={13,450} flag={false}/>
            <Performance
                photo={require('../../../../assete/icon/worst.png')}
                msg='Worst Performance' day='Wednesday' val={566} flag={false}/>
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
  frm1:{alignItems:'center',paddingVertical:30},
  frm2:{
    alignItems:'center',justifyContent:'center',
    paddingVertical:20,
  },
  frm3:{
    // width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    paddingVertical:10,
    // paddingHorizontal:20,
  },
  font1:{fontSize:fontsize.label,textAlign:'left',fontWeight:'bold'},
  font2:{ color:colors.black,fontSize:fontsize.button,fontWeight:'bold' },
  font3:{ color:colors.grey,fontSize:fontsize.text },
  // font4:{ color:colors.grey,fontSize:fontsize.button },
  
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