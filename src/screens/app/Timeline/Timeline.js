/* eslint-disable react/prop-types */
import React,{ Component } from 'react';
import { TouchableOpacity,StyleSheet, Text,Image, View } from 'react-native';
import {
  Container,
  Centered,
  TextInput,
  DarkButton,
  LongText,
  // Text,
  Shadow,
  timeline,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../../shared';
import { FlexCentered,  } from '../../../shared/styledComponents';
import { fontsize } from '../../../shared/constants';

export default class Timeline extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
    <View style={styles.container}>
      {/* <View style={{marginTop:30}}></View> */}
      <View style={styles.frame1}>
        <View style={{flex:1,alignItems:'flex-start',justifyContent:'space-evenly' }}>
          <Text style={styles.label}>Your Timeline</Text>
        </View>
        <View>
          <Image source={require('../../../../assete/image/photo.png')}
              style={{width:60,height:60,borderRadius:30}}/>
        </View>
      </View>

      <View style={styles.frame2}>
        <Text style={styles.font1}>{timeline.msg1}</Text>
        <TouchableOpacity 
          onPress={()=>navigate(routes.timeline2)}
          style={styles.btn1}>
          <Text style={styles.font2}>Click here</Text>
        </TouchableOpacity>
      </View>

        <Text style={styles.font3}>{timeline.msg2}</Text>
       <View style={{alignItems:'center'}}> 
        <Text style={styles.font4}>Click Here</Text>
        <Image source={require('../../../../assete/image/arrow.png')}/>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
  flex: 1,
  alignContent: 'center',
  justifyContent : 'space-around',
  backgroundColor:colors.creamy,
  // paddingHorizontal:20,
  // padding:30
  },
  frame1:{
    width:'100%',height:'15%',flexDirection:'row',
    justifyContent:'space-between',
    marginTop:70,
    paddingHorizontal:30,
  },

  frame2:{
    width:'100%',flexDirection:'row',
    alignItems:'center',justifyContent:'space-between',
    backgroundColor:colors.bakcdark,
    paddingVertical:20,
    paddingHorizontal:20,
  },
  btn1:{
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:colors.dark,
  },
  label:{
    color:colors.black,fontSize:fontsize.label,fontWeight:'bold'
  },
  font1:{
    color:colors.dark,fontSize:fontsize.text
  },
  font2:{
    color:colors.bright,fontSize:fontsize.button
  },
  font3:{
    color:colors.grey,fontSize:fontsize.label,textAlign:'center'
  },
  font4:{
    color:colors.grey,fontSize:fontsize.button,textAlign:'center'
  },
});