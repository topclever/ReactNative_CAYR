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

export default class Rewards extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
    <View style={styles.container}>
      <View style={{marginTop:30}}></View>

      <View style={styles.frame}>
        <View>
          <View style={{marginTop:30}}></View>
          <Text style={styles.label}>Rewards</Text>
          <Text style={styles.text}>Your points 1,23,456</Text>
        </View>
        <Image source={require('../../../../assete/image/photo.png')}
              style={{width:60,height:60,borderRadius:30}}/>
      </View>
      <ImageBackground
          source={require('../../../../assete/image/back2.png')}
          style={{flex:1,width:'100%',height:'100%'}}>
        <TouchableOpacity
           onPress={()=>navigate(routes.reward2)}
          style={{alignItems:'flex-end',padding:15}}>
          <Image source={require('../../../../assete/icon/item.png')}
                style={{width:40,height:40}}/>  
        </TouchableOpacity>
        <View style={{flex:1,justifyContent:'flex-end',padding:10}}>
          <View style={{alignItems:'flex-start'}}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{color:'#48669a',fontSize:fontsize.text}}>AUSMO</Text>
            </TouchableOpacity>
          </View>
          <View><Text style={{color:colors.bright,fontSize:fontsize.text}}>Ausmo</Text></View>
          <View><Text style={{color:colors.bright,fontSize:fontsize.label,fontWeight:'bold'}}>{"bend it like Beckham\nit'll still work"}</Text></View>
          <View><Text style={{color:colors.bright,fontSize:fontsize.text}}>{"funcrion at optimun speed with\nAusmo"}</Text></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.btn1}>
            <Text style={{color:colors.dark,fontSize:fontsize.button}}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Text style={{color:colors.dark,fontSize:fontsize.button}}>Redeem</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:20}}></View>
      </ImageBackground>
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
    width:'90%',flexDirection:'row',
    alignItems:'center',justifyContent:'space-between',
    paddingVertical:20,
    paddingLeft:20
  },
  label:{
    color:colors.black,fontSize:fontsize.label,fontWeight:'bold'
  },
  text:{
    color:colors.black,fontSize:fontsize.button
  },
  btn:{
    borderRadius:20,
    paddingVertical:20,
    paddingHorizontal:10,
    backgroundColor:colors.bright
  },
  btn1:{
    borderRadius:30,
    paddingVertical:10,
    paddingHorizontal:30,
    backgroundColor:colors.bright
  },
});