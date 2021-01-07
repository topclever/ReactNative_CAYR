/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';

import {
  Container,
  Centered,
  TextInput,
  Text,
  Shadow,
  colors,
  DarkButton,
  routes,
  buttons,
} from '../../shared';

export default class SignUp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: '../../../assete/image/photo.png',
      firstname: '',
      lastname: '',
      emil: '',
      checked: 'm',
      birthday: '1990-01-01',
      weight: '',
      allergies: '',
      blood: '',
    };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <View style={{marginTop: 30}} />
        <Image
          source={require('../../../assete/image/photo.png')}
          style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
        />

        <Text color={colors.black}> Edit </Text>
        <ScrollView>
          <Centered>
            {/*Emergency Number  */}
            <View style={styles.frm}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> {'Emergency\nNumber'} </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput
                    placeholder={''}
                    value={this.state.firstname}
                    keyboardType="numeric"
                    onChangeText={str => this.setState({firstname: str})}
                  />
                </Shadow>
              </View>
            </View>
            {/*Insurance Company  */}
            <View style={styles.frm}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}>{'Insurance\nCompany'}</Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput
                    placeholder={''}
                    value={this.state.lastname}
                    onChangeText={str => this.setState({lastname: str})}
                  />
                </Shadow>
              </View>
            </View>
            {/*Policy Number*/}
            <View style={styles.frm}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}>{'Policy\nNumber'}</Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput
                    value={this.state.lastname}
                    onChangeText={str => this.setState({lastname: str})}
                  />
                </Shadow>
              </View>
            </View>

            {/*allergies  */}
            <View style={styles.frm}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> Allergies </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput placeholder={''} number />
                </Shadow>
              </View>
            </View>
            {/*Blood group  */}
            <View style={styles.frm}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> Blood Group </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput placeholder={''} />
                </Shadow>
              </View>
            </View>
            {/*Medical Conditions*/}
            <View style={styles.frm}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}>{'Medical\nConditions'}</Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput placeholder={''} />
                </Shadow>
              </View>
            </View>
          </Centered>

          <DarkButton onPress={() => navigate(routes.start)}>
            <Text color={colors.white}>{buttons.save}</Text>
          </DarkButton>

          <View style={{paddingTop: 30}} />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  frm: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
