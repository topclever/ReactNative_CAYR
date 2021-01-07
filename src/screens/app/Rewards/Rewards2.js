/* eslint-disable react/prop-types */
import React,{ Component } from 'react';
import { TouchableOpacity,StyleSheet, Text,Image, View,ImageBackground } from 'react-native';
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
import RewardPoint from '../../../components/RewardPoint';

export default class Rewards2 extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
    <View style={styles.container}>
      <Text style={styles.label}>Rewards</Text>
      <RewardPoint/>
      <View style={styles.frame}>
        <Text style={styles.font1}>You have 1unused voucher</Text>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.font2}>Use</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialfrm}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../../../../assete/image/item4.png')}/>
        </View>
        <View>
          <Text style={styles.font3}>Social</Text>
          <Text style={styles.font4}>{'another reason to visit\nsocial'}</Text>
          <Text style={styles.font4}>Available till 31st Match</Text>
        </View>
        <View style={{flexDirection:'column',justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.font1}>1A2B3C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.font2}>USED</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    width:'100%',flexDirection:'row',
    alignItems:'center',justifyContent:'space-between',
    backgroundColor:colors.bakcdark,
    paddingVertical:10,
    paddingHorizontal:20,
    marginTop:30    
  },
  socialfrm:{
    flexDirection:'row',
    paddingVertical:20,
    justifyContent:'space-around',
    borderBottomColor:colors.grey,
    borderBottomWidth:1,
    marginTop:30  
  },
  label:{color:colors.black,fontSize:fontsize.label,padding:20,fontWeight:'bold'},
  font1:{
    color:colors.dark,fontSize:fontsize.text
  },
  font2:{
    color:colors.bright,fontSize:fontsize.button
  },
  font3:{
    color:colors.black,fontSize:fontsize.button
  },
  font4:{
    color:colors.grey,fontSize:fontsize.text
  },
  btn1:{
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:35,
    backgroundColor:colors.dark,
    marginVertical:5
  },
  btn2:{
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:30,
    backgroundColor:colors.bakcdark,
    marginVertical:5
  },
});