import React from 'react';
import { TouchableOpacity, Text,Image, View,StyleSheet } from 'react-native';
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

export default class Itemframe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value:0
        };
      }
  render() {
    return (
      <View style={styles.container}>
           {/* <Text>{this.props.img}</Text> */}
          <View style={{flexDirection:'row'}}>
            <View style={styles.btnIcon}>
                <Image  source={this.props.img}
                        style={{width:50,height:50}}/>
            </View>
            <View style={{flex:0.8, }}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{justifyContent:'flex-start'}}>
                        <Text style={styles.item}>{this.props.label}</Text>
                        <Text style={styles.val}>{this.props.max}/{this.state.value}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnText}>{buttons.track}</Text>
                        </TouchableOpacity>
                    </View>
                </View>   
                <View style={{alignItems:'center', justifyContent: 'center' }}>
                    <Slider
                        width={'90%'}
                        maximumValue={this.props.max}
                        step={this.props.step}
                        thumbTintColor={colors.dark}
                        trackStyle={{height:5}}
                        value={this.state.value}
                        onValueChange={value => this.setState({value: value })}
                    />
                </View> 
            </View>  
          </View>
          
      </View>
    );
  }
}

Itemframe.propTypes = {
    // onPress: PropTypes.func,
    img: PropTypes.string,
    label: PropTypes.string,
    max: PropTypes.number,
    step: PropTypes.number,
    // btn_back_col: PropTypes.string,
    // btn_txt_col: PropTypes.string,
    // onChat: PropTypes.func,
  };

  const styles = StyleSheet.create({
    container:{
      flex:1,
      // height:200,
      alignItems:'center',
      // justifyContent:'space-around',
      backgroundColor:colors.bright,
      borderBottomColor:colors.grey,
      borderBottomWidth:1,
      paddingVertical:20
    },
    label: {
      flex:1,justifyContent:'center',alignItems:'flex-start',
    },
    btnContainer: {
      backgroundColor:colors.bakcdark,
      paddingHorizontal:20,
      paddingVertical:10,
      borderRadius:20
    },
    btnIcon: {
      flex:0.2,
      alignItems:'center', justifyContent:'center',
    },
    btnText: {
      fontFamily: 'FallingSkyCond',
      fontSize: 16,
      fontWeight:'bold',
      color:colors.dark,
    },
    item:{
      color:colors.black,
      fontSize:fontsize.button,
      textAlign:'left'
    },
    val:{
      color:colors.dark,
      fontSize:fontsize.text,
      textAlign:'left'
    },
  });