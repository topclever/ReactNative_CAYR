/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {View, StyleSheet,AsyncStorage, Image, TouchableOpacity } from 'react-native';

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
} from '../../shared';
import { fontsize } from '../../shared/constants';

export default class Number2 extends Component {
  // TODO: move this to utils
  render() {
    const { navigate } = this.props.navigation;   
  return (
    <Container>
      <Centered>
        <Image source={require('../../../assete/icon/logo.png')}  ></Image>
        <View style={{marginTop:30}}></View>
        <LongText color={colors.black}>
          {"We sent you a code to\nverify your number"}
        </LongText>
        <View style={{marginTop:30}}></View>
        <View style={{flexDirection:'row',width:'80%' ,justifyContent:'space-around'}}>
         <Shadow><TextInput maxLength={1} style={styles.number} keyboardType = 'numeric'/></Shadow>
          <Shadow><TextInput maxLength={1} style={styles.number} keyboardType = 'numeric'/></Shadow>
          <Shadow><TextInput maxLength={1} style={styles.number} keyboardType = 'numeric'/></Shadow>
          <Shadow><TextInput maxLength={1} style={styles.number} keyboardType = 'numeric'/></Shadow>
        </View>
        <View style={{marginTop:30}}></View>
        <View style={{flexDirection:'row',alignItems:'center', marginTop:10,marginBottom:40}}>
                <Text style={{color:colors.grey, fontSize:fontsize.button,}}>Didn't receive?  </Text>
                <Text style={{color:colors.dark, fontSize:fontsize.button,fontWeight:'bold'}}>Resend in 00:05</Text>
        </View>
      </Centered>
        <DarkButton onPress={()=>navigate(routes.con)}>
          <Text color={colors.white}>{buttons.con}</Text>
        </DarkButton>
        
    </Container>
  );
}
}

const styles = StyleSheet.create({
  number:{
    backgroundColor:'white',
    padding:15,
    width:50,
    borderRadius:10,
    color:"black",
    textAlign:'center'
  }
});

