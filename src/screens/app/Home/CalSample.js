/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {ScrollView,View, StyleSheet,AsyncStorage, Image,Text, TouchableOpacity } from 'react-native';
import StateItem from '../../../components/StateItem'
import Performance from '../../../components/Performance';
import ProgressCircle from 'react-native-progress-circle'
import {
  Container,
  Centered,
  TextInput,
  DarkButton,
  LongText,
  TitleText,
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

export default class CalSample extends Component {
 constructor(props) {
      super(props);
      this.state = {
        carb:32,
        protein:40,
        fat:32
      };
    }    
  render() {
   
    return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.frm1}>
        <TitleText color={colors.black}>{'You have consumed\n500 cal today'}</TitleText>
      </View>

      <View style={styles.frm1}>
      <ProgressCircle
            percent={this.state.carb}
            radius={120}
            borderWidth={12}
            color={colors.carb}
            shadowColor="#ddd"
            bgColor="#fff" >
            <ProgressCircle
              percent={this.state.protein}
              radius={105}
              borderWidth={12}
              color={colors.dark}
              shadowColor="#ddd"
              bgColor="#fff" >
                <ProgressCircle
                  percent={this.state.fat}
                  radius={90}
                  borderWidth={12}
                  color={colors.fat}
                  shadowColor="#ddd"
                  bgColor="#fff" >
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{ color:colors.black,fontSize:fontsize.label,fontWeight:'bold' }}>40%</Text>
                    <Text style={{ color:colors.grey,fontSize: 16 }}>{'of daily goals'}</Text>
                  </View>
              </ProgressCircle>   
          </ProgressCircle>   
        </ProgressCircle>
      </View>
      <View>
          <StateItem color={colors.carb} msg='Carb' val={100} percent={this.state.carb}/>
          <StateItem color={colors.dark} msg='Protein' val={90} percent={this.state.protein}/>
          <StateItem color={colors.fat} msg='Fat' val={100} percent={this.state.fat}/>
      </View>
      <View>
        <View style={styles.frm2}>
          <Text style={styles.font1}>Breakfast</Text>
        </View>
          <Performance
                photo={require('../../../../assete/icon/macchiato.png')}
                msg='Latte Macchiato' day='1 piece 2 oz' val={190} flag={false}/>
          <Performance
                photo={require('../../../../assete/icon/pizza.png')}
                msg='Tuna Pizza' day='1 piece 2 oz' val={190} flag={true}/>

      </View>
      <View>
          <View style={styles.frm2}>
            <Text style={styles.font1}>Lunch</Text>
          </View>
          <Performance
                photo={require('../../../../assete/icon/burger.png')}
                msg='Big Mac Burger' day='1 piece 2 oz' val={190} flag={true}/>
          <Performance
                photo={require('../../../../assete/icon/avocado.png')}
                msg='Avocado Smoothies' day='1 piece 2 oz' val={190} flag={false}/>

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
  frm1:{alignItems:'center',paddingVertical:10},
  frm2:{
    // width:'100%',flexDirection:'row',
    alignItems:'flex-start',
    // justifyContent:'space-between',
    // backgroundColor:colors.bakcdark,
    paddingTop:30,
    paddingHorizontal:20,
  },
  frm3:{
    // width:'100%',
    flexDirection:'row',
    // alignItems:'center',justifyContent:'space-between',
    
    paddingVertical:20,
    // paddingHorizontal:20,
  },
  font1:{fontSize:fontsize.label,textAlign:'left',},
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