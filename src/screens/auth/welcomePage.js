/* eslint-disable react-native/no-inline-styles */
//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, Text, routes, DarkButton, buttons} from '../../shared';
import {fontsize} from '../../shared/constants';

export default class welcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../../assete/image/preview1.png'),
        require('../../../assete/image/preview2.png'),
        require('../../../assete/image/preview1.png'),
        require('../../../assete/image/preview2.png'),
        require('../../../assete/image/preview1.png'),
        require('../../../assete/image/preview2.png'),
      ],
    };
  }

  // static navigationOptions = {
  //   // title: 'First Page',
  //   //Sets Header text of Status Bar
  //   headerStyle: {
  //   //   backgroundColor: '#f4511e',

  //     //Sets Header color
  //   },
  //   headerTintColor: '#fff',
  //   //Sets Header text color
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     //Sets Header text style
  //   },
  // };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.creamy}
          translucent={true}
        />
        <Image
          style={{marginTop: 70, width: 80, height: 80}}
          source={require('../../../assete/icon/logo.png')}
        />
        <Text style={styles.title}>{'Welcome to\nCAYR'}</Text>

        <View style={{flex: 1, marginTop: 20}}>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={350}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor={colors.dark}
            inactiveDotColor="#90A4AE"
            autoplay="true"
            circleLoop="true"
            parentWidth={this.state.width}
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              // marginHorizontal: 5,
              // padding: 0,
              // marginBottom: 50
            }}
          />
        </View>
        {/* <Button onPress={navigate.Number1}> */}
        <DarkButton onPress={() => navigate(routes.register)}>
          <Text color={colors.white}>{buttons.start}</Text>
        </DarkButton>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 40,
          }}>
          <Text style={{color: colors.grey, fontSize: fontsize.button}}>
            Already have account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigate(routes.num1)}>
            <Text
              style={{
                color: colors.dark,
                fontSize: fontsize.button,
                fontWeight: 'bold',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamy,
    alignItems: 'center',
    justifyContent: 'space-between',
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
