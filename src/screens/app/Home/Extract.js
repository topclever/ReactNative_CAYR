import React, {Component} from 'react';
import RNTextDetector from 'react-native-text-detector';
import ImagePicker from 'react-native-image-picker';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {colors} from '../../../shared';
import {fontsize} from '../../../shared/constants';
// import { FlexCentered, Text } from '../../shared/styledComponents';

export default class Extract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }
  selectFile = () => {
    var options = {
      title: 'Select Image',
      // customButtons: [
      //   {
      //     name: 'customOptionKey',
      //     title: 'Choose file from Custom Option'
      //   },
      // ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  onExtract = () => {
    try {
      const visionResp = RNTextDetector.detectFromUri(
        this.state.resourcePath.uri,
      );
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(visionResp));
      console.log('visionResp', visionResp);
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Error: ' + e);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <View>
            <TouchableOpacity onPress={this.selectFile} style={styles.btn}>
              <Text style={{fontSize: fontsize.button}}>Select Photo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.onExtract} style={styles.btn}>
              <Text style={{fontSize: fontsize.button}}>Extract</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center', padding: 10}}>
          {/* <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
            }}
            style={{width: 100, height: 100}}
          /> */}
          <Image
            source={{uri: this.state.resourcePath.uri}}
            style={styles.img}
          />
          <Text style={{alignItems: 'center', fontSize: 18}}>
            {this.state.resourcePath.uri}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.creamy,
    // paddingHorizontal:20,
    // padding:30
  },
  item: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  combobox: {
    flex: 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingLeft: 10,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bakcdark,
    borderRadius: 20,
  },
  img: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').width,
    // alignItems: 'stretch',
    // width: null,
    // height: null,
    // resizeMode: 'contain',
  },
});
