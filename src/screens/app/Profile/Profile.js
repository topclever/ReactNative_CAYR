/* eslint-disable react/prop-types */
import React,{Component} from 'react';
import { View,StyleSheet,Image, Text, TouchableOpacity } from 'react-native';
import {colors, messages, buttons,routes} from '../../../shared';
import { fontsize, titles } from '../../../shared/constants';

export default class Profile extends Component {
  render() {
    const { navigate } = this.props.navigation;   
    return (
      <View style={styles.container}>
        <View style={{marginTop:30}}></View>
        <View style={{width:'100%',alignItems:'center',paddingVertical:20}}>
          <Image source={require('../../../../assete/image/photo.png')}
                style={{width:100,height:100,borderRadius:50}}>
          </Image>
        </View>
        <View>
          <View style={{width:'100%' ,paddingVertical:15, flexDirection:'row',justifyContent:'space-around',backgroundColor:colors.bakcdark}}>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={styles.msg}>{messages.unlimited}</Text>
              </View>
              <TouchableOpacity style={styles.btnContainer}>
                  <Text style={styles.btnText}>{buttons.buy}</Text>
              </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.item}
                onPress={()=>navigate(routes.mypro)}>
            <Text style={styles.itemText}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigate(routes.me)}
                  style={styles.item}>
            <Text style={styles.itemText}>Shared with me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigate(routes.others)}
                  style={styles.item}>
            <Text style={styles.itemText}>Shared with others</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
              onPress={()=>navigate(routes.invite)}>
            <Text style={styles.itemText}>Invite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
                onPress={()=>navigate(routes.settins)}>
            <Text style={styles.itemText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Connect Device</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={()=>navigate(routes.help)}
              style={styles.item}>
            <Text style={styles.itemText}>Help and Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
            onPress={()=>navigate(routes.welcome)}  >
            <Text style={styles.itemText}>Log Out</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    // width:'100%',
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    paddingVertical:15,
    paddingLeft:100,
    backgroundColor:colors.bright
  },
  itemText:{
    textAlign:'left',
    color:colors.black,
    fontSize:fontsize.text
  },
  container:{
  flex: 1,
  alignContent: 'center',
  justifyContent :'flex-start',
  backgroundColor:colors.creamy,

  // paddingHorizontal:20,
  // padding:30
  },
  btnContainer: {
    backgroundColor:colors.dark,
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius:20
  },
  btnText: {
    fontFamily: 'FallingSkyCond',
    fontSize: 16,
    fontWeight:'bold',
    color:colors.bright,
  },
  msg:{
    color:colors.dark,
    fontSize:fontsize.text
  },

});