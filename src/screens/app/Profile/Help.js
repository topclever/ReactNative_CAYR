import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {colors} from '../../../shared';
import {fontsize} from '../../../shared/constants';

export default class Help extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.frm1}>
            <Text style={styles.font1}>What's inside</Text>
          </View>
          <View style={styles.frm2}>
            <Text style={styles.font2}>risus feugiat in ante metus</Text>
            <Text style={styles.font2}>risus feugiat in ante metus</Text>
            <Text style={styles.font2}>risus feugiat in ante metus</Text>
            <Text style={styles.font2}>risus feugiat in ante metus</Text>
          </View>

          <View style={styles.frm1}>
            <Text style={styles.font1}>about Ausmo</Text>
          </View>
          <View style={styles.frm2}>
            <Text style={styles.font2}>Lorem ipsum dolor sit amet,</Text>
            <Text style={styles.font2}>consectetur adipiscing elit,sed do</Text>
            <Text style={styles.font2}>eiusmod tempor incididunt ut</Text>
            <Text style={styles.font2}>labore et dolore magna aliqua.</Text>
            <Text style={styles.font2}>Arcu risus quis varius quam</Text>
            <Text style={styles.font2}>quisque id diam.</Text>
          </View>

          <View style={styles.frm1}>
            <Text style={styles.font1}>visit the link</Text>
          </View>
          <View style={styles.frm2}>
            <Text style={styles.font2}>http://www.abc.xyz/123456</Text>
          </View>

          <View style={styles.frm1}>
            <Text style={styles.font1}>how to redeem</Text>
          </View>
          <View style={styles.frm2}>
            <Text style={styles.font2}>risus feugiat in ante metus</Text>
            <Text style={styles.font2}>risus feugiat in ante metus</Text>
            <Text style={styles.font2}>risus feugiat in ante metus</Text>
            <Text style={styles.font2}>risus feugiat in ante metus</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.creamy,
  },
  frm1: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 20,
  },
  frm2: {width: '100%', justifyContent: 'flex-start', paddingLeft: 30},

  font1: {color: colors.black, fontSize: fontsize.label},

  font2: {color: colors.black, fontSize: fontsize.button},
});
