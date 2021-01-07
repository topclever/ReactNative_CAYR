import React,{Component} from 'react';
import { View, Switch,StyleSheet,Image, Text, TouchableOpacity } from 'react-native';
import {colors, messages,DarkButton,WhiteButton, buttons,routes} from '../../../shared';
import { fontsize, titles } from '../../../shared/constants';

export default class Settings extends Component {
constructor(props){
    super(props);
    this.state = {
      switchValue1:true,
      switchValue2:false,

      };
}
toggleSwitch1 = (value) => {
  this.setState({switchValue1: value})
}

toggleSwitch2 = (value) => {
    this.setState({switchValue2: value})
}

  render() {
    const { navigate } = this.props.navigation;   
    return (
      <View style={styles.container}>
          <View style={styles.titleframe}>
            <Text style={styles.title}>Settings</Text>
          </View>

          <View style={styles.item}>
              <Text style={styles.item_label}>Push Notification</Text>
              <Switch style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    onValueChange = {this.toggleSwitch1}
                    value = {this.state.switchValue1}/>
          </View>
          <View style={styles.item}>
              <Text style={styles.item_label}>Subscribe email</Text>
              <Switch style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    onValueChange = {this.toggleSwitch2}
                    value = {this.state.switchValue2}/>
          </View>
          <TouchableOpacity style={styles.item}>
              <Text style={styles.item_label}>Give Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
              <Text style={styles.item_label}>About Us</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1, alignItems:'center',justifyContent:'flex-start',
    backgroundColor:colors.creamy
  },
  title:{
    color:colors.black,
    fontSize:fontsize.label,
  },
  titleframe:{
    width:'90%',
    justifyContent:'flex-start',
    paddingVertical:10,
    paddingBottom:50
  },
  item:{
    flexDirection:'row',
    width:'90%',
    justifyContent:'space-between',
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    paddingVertical:20
  },
  item_label:{
    color:colors.black,
    fontSize:fontsize.button,
    textAlign:'center'
  },
})