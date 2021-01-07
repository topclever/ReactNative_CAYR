/* eslint-disable react/prop-types */
import React,{ Component } from 'react';
import { View,AsyncStorage, Image,StatusBarIOS, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-input'
import CountryPicker from 'react-native-country-picker-modal';

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

export default class Number1 extends Component {
  
  constructor(props){
    // StatusBarIOS.setHidden('default');
    super(props);
    // this.phone.selectCountry('IN');
    this.state = {
      cca2: 'IN',
      carrency:'',
      callcode:'',
      flag:''
    };
  }
 onPressFlag=()=>{
    this.countryPicker.openModal()
}
selectCountry=(country)=>{
  // alert(country.cca2);
    this.phone.selectCountry(country.cca2.toLowerCase())
    this.setState({cca2: country.cca2})
    this.setState({carrency: country.currency})
    this.setState({callcode: country.callingCode})
    this.setState({flag: country.flag})
    
}
  render() {
    const { navigate } = this.props.navigation;  
        return (
          <Container>
            <Centered>
              <Image source={require('../../../assete/icon/logo.png')}  ></Image>
              <View style={{marginTop:30}}></View>
              <LongText color={colors.black}>
                {"Let's start with your\nmobile number"}
              </LongText>
              <View style={{marginTop:30}}></View>
              <Shadow >
                <View style={{ paddingHorizontal:10,flexDirection:'row'}}>
                  
                  <PhoneInput
                    ref={(ref) => { this.phone = ref; }}
                    onPressFlag={()=>this.onPressFlag}
                  />
                  <View style={{alignItems:'center',justifyContent:'center'}}> 
                    <Text style={{width:50,color:colors.black,textAlign:'center'}}>{this.state.callcode}</Text>
                  </View>
                  <TextInput style={{width:200}} keyboardType = 'numeric'/>
                </View>
              </Shadow>
              <View style={{marginTop:20}}></View> 
               <CountryPicker
                      ref={(ref) => { this.countryPicker = ref; }}
                      onSelect={(value)=> this.selectCountry(value)}
                      translation='eng'
                      withFlag={true}
                      withCallingCode={true}
                      withEmoji={true}
                      visible={false}
                      > 
                  </CountryPicker>
            </Centered>
            
                  {/* <Text>{this.state.cca2}</Text>
                  <Text>{this.state.currency}</Text>
                  <Text>{this.state.flag}</Text> */}
            <DarkButton onPress={()=>navigate(routes.num2)}>
                <Text color={colors.white}>{buttons.con}</Text>
            </DarkButton> 
           
          </Container>
        );
    }       
}


