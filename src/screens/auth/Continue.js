/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {ScrollView,View, StyleSheet,AsyncStorage, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Centered,
  TextInput,
  DarkButton,
  WhiteButton,
  LongText,
  Text,
  messages,
  colors,
  placeholders,
  routes,
  buttons,
} from '../../shared';
import { fontsize } from '../../shared/constants';

export default class Continue extends Component {
  // TODO: move this to utils
  render() {
    const { navigate } = this.props.navigation;   
  return (
    <Container>
      <ScrollView>
      <Centered>
        <Image source={require('../../../assete/icon/logo.png')}  ></Image>
        
        <LongText color={colors.black}>
          {messages.conTitle}
        </LongText>
        <Image source={require('../../../assete/image/back3.png')}  ></Image>
        
      <View style={{alignItems:'flex-start',paddingVertical:10}}>
        <View style={styles.line}>
          <Image source={require('../../../assete/icon/check.png')}
                style={{width:30,height:30,opacity:0.5}}  ></Image>
          <Text color={colors.black}>New weekly healthy reminder</Text>
        </View>
       
        <View style={styles.line}>
          <Image source={require('../../../assete/icon/check.png')}
                style={{width:30,height:30,opacity:0.5}}  ></Image>
          <Text color={colors.black}>Motivational reminder</Text>
        </View>

        <View style={styles.line}>
          <Image source={require('../../../assete/icon/check.png')}
                style={{width:30,height:30,opacity:0.5}}  ></Image>
          <Text color={colors.black}>Personalised program</Text>
        </View>
      </View>
      </Centered>
        <DarkButton onPress={()=>navigate(routes.start)}>
          <Text color={colors.white}>{buttons.start}</Text>
        </DarkButton>
        <WhiteButton >
          <Text color={colors.dark}>{buttons.notnow}</Text>
        </WhiteButton>
        </ScrollView>
    </Container>
  );
}
}

const styles = StyleSheet.create({
  number:{
    backgroundColor:'white',
    padding:15,
    borderRadius:10,
    color:"black",
    textAlign:'center'
  },
  line:{
    flexDirection:'row',alignItems:'center',justifyContent:'flex-start',
    width:'90%',
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:colors.grey,
  }
});

