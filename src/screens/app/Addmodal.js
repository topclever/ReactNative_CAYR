/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Modal, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import {
  Container,
  DarkButton,
  WhiteButton,
  Text,
  colors,
  routes,
} from '../../shared';
import {fontsize} from '../../shared/constants';

export default class Addmodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      checked: 'a',
    };
  }

  func = () => {};
  toggleModal = () => {
    this.setState({isVisible: !this.state.isVisible});
  };
  render() {
    var listdata = [];
    for (let i = 1; i <= 60; i++) {
      listdata.push(i);
    }
    const {navigate} = this.props.navigation;
    const {checked} = this.state;
    return (
      <Container>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={true}
          onRequestClose={this.func}>
          <View style={styles.modalfrm1}>
            <WhiteButton onPress={this.func}>
              <Text color={colors.dark}>Upload PDF</Text>
            </WhiteButton>
            <WhiteButton onPress={this.toggleModal}>
              <Text color={colors.dark}>Manual Entry</Text>
            </WhiteButton>
            <WhiteButton onPress={this.func}>
              <Text color={colors.dark}>Upload Prescription</Text>
            </WhiteButton>
            <WhiteButton onPress={this.func}>
              <Text color={colors.dark}>Upload Medical Records</Text>
            </WhiteButton>
            <WhiteButton onPress={this.func}>
              <Text color={colors.dark}>Click Image</Text>
            </WhiteButton>

            <TouchableOpacity
              style={{
                backgroundColor: colors.dark,
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 30,
              }}
              // onPress={() =>this.setState({isVisible:false})}
              onPress={() => navigate(routes.start)}>
              <Image
                source={require('../../../assete/icon/close.png')}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: '#f1f6f9',
                  alignContent: 'center',
                }}
              />
            </TouchableOpacity>
            <Modal
              animationType={'slide'}
              transparent={false}
              visible={this.state.isVisible}
              onRequestClose={this.func}>
              <View style={styles.modalfrm2}>
                <View
                  style={{
                    backgroundColor: '#000000ee',
                    width: '100%',
                    height: '30%',
                  }}
                />
                <View style={{paddingVertical: 20}}>
                  <Text style={styles.font1}>
                    {'What is your glucose\nlevel?'}
                  </Text>
                </View>
                <Text style={styles.font2}>
                  {
                    'Enter your glucose values and\nkeep a track over a period of time.'
                  }
                </Text>
                <View
                  style={{
                    width: '40%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                  }}>
                  {/* <View style={{paddingVertical: 10}}> */}
                  <ScrollPicker
                    dataSource={listdata}
                    selectedIndex={9}
                    renderItem={(data, index, isSelected) => {}}
                    onValueChange={(data, selectedIndex) => {}}
                    wrapperHeight={200}
                    wrapperWidth={50}
                    wrapperBackground={colors.bright}
                    itemHeight={50}
                    highlightColor={colors.grey}
                    highlightBorderWidth={1}
                    activeItemColor={colors.black}
                    itemColor={'#B4B4B4'}
                  />
                  <ScrollPicker
                    dataSource={listdata}
                    selectedIndex={29}
                    renderItem={(data, index, isSelected) => {}}
                    onValueChange={(data, selectedIndex) => {}}
                    wrapperHeight={200}
                    wrapperWidth={50}
                    wrapperBackground={colors.bright}
                    itemHeight={50}
                    highlightColor={colors.grey}
                    highlightBorderWidth={1}
                    activeItemColor={colors.black}
                    itemColor={'#B4B4B4'}
                  />
                  <Text style={{color: colors.black}}>mg/Dl</Text>
                  {/* </View> */}
                </View>
                <View
                  style={{
                    paddingVertical: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioButton
                    value="a"
                    color={colors.dark}
                    status={checked === 'a' ? 'checked' : 'unchecked'}
                    onPress={() => {
                      this.setState({checked: 'a'});
                    }}
                  />
                  <Text style={{color: colors.black}}>Before Breakfast</Text>
                  <RadioButton
                    value="b"
                    color={colors.dark}
                    status={checked === 'b' ? 'checked' : 'unchecked'}
                    onPress={() => {
                      this.setState({checked: 'b'});
                    }}
                  />
                  <Text style={{color: colors.black}}>After Breakfast</Text>
                </View>
                <DarkButton onPress={this.toggleModal}>
                  <Text color={colors.bright}>Save</Text>
                </DarkButton>
              </View>
            </Modal>
          </View>
        </Modal>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  modalfrm1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000dd',
  },
  modalfrm2: {
    flex: 1,
    height: '60%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffffdd',
  },
  font1: {color: colors.black, fontSize: fontsize.label},
  font2: {color: colors.grey, fontSize: fontsize.button},
});
