import React from 'react';
import { TouchableOpacity, Image, View,StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';
import PropTypes from 'prop-types';

// import styles from './styles';
import {
    Container,
    Centered,
    TextInput,
    DarkButton,
    SmallButton,
    LongText,
    Text,
    Shadow,
    messages,
    colors,
    placeholders,
    routes,
    buttons,
  } from '../shared';
  import { fontsize, titles } from '../shared/constants';

export default class Performance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{flex:0.2,alignItems:'center'}}>
                <Image source={this.props.photo}/>
            </View>
            <View style={{flex:0.5,alignItems:'flex-start'}}>
                <Text color={colors.black} style={{fontWeight:'bold'}}>{this.props.msg}</Text>
                <Text color={colors.grey} >{this.props.day}</Text>        
            </View>
            <View style={{opacity:this.props.flag ? 1: 0,flex:0.1,alignItems:'flex-end',justifyContent:'center'}}>
                <View style={{backgroundColor:colors.carb , width:10,height:10,borderRadius:10}}></View>
            </View>
            <View style={{flex:0.2,justifyContent:'center'}}>
                <Text color={colors.black} style={{fontWeight:'bold'}}>{this.props.val}</Text>
            </View>     
        </View>
      </View>
    );
  }
}

Performance.propTypes = {
    // onPress: PropTypes.func,
    photo:PropTypes.string,
    msg: PropTypes.string,
    day: PropTypes.string,
    val: PropTypes.number,
    flag: PropTypes.bool,
    // btn_back_col: PropTypes.string,
    // btn_txt_col: PropTypes.string,
    // onChat: PropTypes.func,
  };

  const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:10,
      paddingVertical:10,
      borderBottomColor:'#ddd',
      borderBottomWidth:1,
      
    },
    
  });