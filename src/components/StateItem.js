import React from 'react';
import { TouchableOpacity, Image, View,Text,StyleSheet } from 'react-native';
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
    
    Shadow,
    messages,
    colors,
    placeholders,
    routes,
    buttons,
  } from '../shared';
  import { fontsize, titles } from '../shared/constants';

export default class StateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
            <View style={{flex:0.2,alignItems:'center'}}>
                <View style={{backgroundColor:this.props.color,width:20,height:20,borderRadius:5}}></View>
            </View>
            <View style={{flex:0.3,alignItems:'flex-start'}}>
                <Text style={styles.font1}>{this.props.msg}</Text>
            </View>
            <View style={{flex:0.3,alignItems:'center'}}>
                <Text style={styles.font1}>{this.props.val}g</Text>
            </View>
            <View style={{flex:0.2,alignItems:'center'}}>
                <Text style={styles.font2}>{this.props.percent}%</Text>
            </View>
        </View>
      </View>
    );
  }
}

StateItem.propTypes = {
    // onPress: PropTypes.func,
    color:PropTypes.string,
    label: PropTypes.string,
    percent: PropTypes.number,
    val: PropTypes.number,
    // step: PropTypes.number,
    // btn_back_col: PropTypes.string,
    // btn_txt_col: PropTypes.string,
    // onChat: PropTypes.func,
  };

  const styles = StyleSheet.create({
    container:{
      flex:1,
    //   paddingHorizontal:20,
      paddingVertical:10,
      borderBottomColor:'#ddd',
      borderBottomWidth:1,
    },
    icon:{
        width:30,height:30,borderRadius:5
    },
    font1:{
        color:colors.black,
        fontSize:fontsize.button,
    },
    font2:{
        color:colors.black,
        fontSize:fontsize.button,
        fontWeight:'bold'
    },
  });