import React from 'react';
import { TouchableOpacity, Image, View,StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
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

export default class Insight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
  render() {
    return (
      <View style={styles.container}>
         <View>
           <Progress.Bar progress={this.props.val} color={colors.dark} width={30} height={10}
              style={{borderRadius:10, transform: [{ rotate: '-90deg' }] }} /> 
        </View>
        <View style={{paddingVertical:10}}>
          <Text color={colors.black}>{this.props.label}</Text>
        </View>
      </View>
    );
  }
}

Insight.propTypes = {
    // onPress: PropTypes.func,
    val: PropTypes.string,
    label: PropTypes.string,
    // max: PropTypes.number,
    // step: PropTypes.number,
    // btn_back_col: PropTypes.string,
    // btn_txt_col: PropTypes.string,
    // onChat: PropTypes.func,
  };

  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      
    },
    
  });