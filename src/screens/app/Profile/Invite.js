/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Image, Text} from 'react-native';
import {
  colors,
  messages,
  DarkButton,
  WhiteButton,
  Shadow,
  TextInput,
  routes,
} from '../../../shared';
import {fontsize} from '../../../shared/constants';

export default class Invite extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{paddingVertical: 20}}>
            <Image source={require('../../../../assete/image/frends.png')} />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={styles.comment1}>{messages.refer}</Text>
            <Text style={styles.comment2}>{messages.refer_comment}</Text>
          </View>

          <Shadow style={{width: '70%'}}>
            <TextInput placeholder={'+91-9999621399'} keyboardType="numeric" />
          </Shadow>

          <WhiteButton>
            <Text style={{color: colors.dark, fontSize: fontsize.button}}>
              http://cayr.com/sd45d
            </Text>
          </WhiteButton>

          <DarkButton onPress={() => navigate(routes.pro)}>
            <Text style={{color: colors.bright, fontSize: fontsize.button}}>
              Share
            </Text>
          </DarkButton>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  item_label: {
    color: colors.black,
    fontSize: fontsize.button,
    textAlign: 'center',
  },
  item_val: {
    color: colors.black,
    fontSize: fontsize.text,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.creamy,
  },
  comment1: {
    color: colors.black,
    fontSize: fontsize.label,
    textAlign: 'center',
  },
  comment2: {
    color: colors.grey,
    fontSize: fontsize.text,
    textAlign: 'center',
  },
});
