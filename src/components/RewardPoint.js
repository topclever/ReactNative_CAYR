import React from 'react';
import { StyleSheet, Image,  Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
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
} from '../shared';
import { FlexCentered,  } from '../shared/styledComponents';
import { fontsize } from '../shared/constants';

export default class RewardPoint extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.frm1}>
          <Text style={styles.font1}>My Reward Point</Text>
          <Text style={styles.font2}>2,500</Text>
        </View>
        <View style={styles.frm2}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../../assete/image/photo.png')}
                  style={styles.photo}/>
            </View>
            <View style={{justifyContent:'space-around'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.font3}>Silver</Text>
                  <Text style={styles.font3}>Platium</Text>
              </View>
              <View>
                <Progress.Bar progress={0.3} color={colors.dark} width={200} />
              </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:200,
    justifyContent:'space-between',
    borderRadius:10,
    marginHorizontal:20,
    backgroundColor:colors.dark,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 4.00,
    elevation: 8,
  },
  frm1:{flex:1,alignItems:'center',justifyContent:'center'},
  frm2:{flexDirection:'row',justifyContent:'space-around',paddingVertical:10, backgroundColor:colors.bright},
  font1:{color:colors.bright,fontSize:fontsize.text},
  font2:{color:colors.bright,fontSize:fontsize.label},
  font3:{color:colors.black,fontSize:fontsize.text},
  photo:{width:50,height:50,borderRadius:25},
})