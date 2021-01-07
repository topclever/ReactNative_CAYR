//This is an example code for Navigator//
import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {colors, Text, routes, WhiteButton, buttons} from '../../shared';
import {fontsize} from '../../shared/constants';

export default class StartPage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const newLocal = {textAlign: 'center', fontSize: 25, padding: 10};
    return (
      <ImageBackground
        source={require('../../../assete/image/back.png')}
        style={styles.back}>
        <View style={styles.container}>
          <Text color={colors.white} style={newLocal}>
            {'You ard ready to go!'}
          </Text>
          <Text
            color={colors.white}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{textAlign: 'center', paddingBottom: 50}}>
            {
              'Thanks for taking your time to\ncreate account with us. Now this is\nthe fun part, explore the app.'
            }
          </Text>
          <WhiteButton onPress={() => navigate(routes.fullname)}>
            <Text color={colors.dark}>{buttons.profile}</Text>
          </WhiteButton>
          <Text color={colors.white}>or</Text>
          <WhiteButton onPress={() => navigate(routes.app)}>
            <Text color={colors.dark}>{buttons.start}</Text>
          </WhiteButton>

          {/*  <View style={{flexDirection:'row',alignItems:'center', marginTop:10,marginBottom:40}}>
                <Text style={{color:colors.grey, fontSize:fontsize.button,}}>Already have account?  </Text>
                <Text style={{color:colors.dark, fontSize:fontsize.button,fontWeight:'bold'}}>Sign in</Text>
            </View> */}
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  back: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.dark,
    marginTop: 10,
    //   marginBottom:20
  },
  caption: {
    color: colors.white,
    fontSize: fontsize.button,
  },
  title: {
    color: 'black',
    fontSize: fontsize.title,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
