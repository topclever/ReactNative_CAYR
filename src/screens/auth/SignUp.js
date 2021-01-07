/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, View, Image} from 'react-native';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
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

export default class SignUp extends Component {
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

  msg = () => {
    alert(this.state.birthday);
  };
  render() {
    const {navigate} = this.props.navigation;
    const {checked} = this.state;

    return (
      <Container>
        <View style={{marginTop: 30}} />
        <Image
          source={require('../../../assete/image/photo.png')}
          style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
        />

        <Text color={colors.black}> Edit </Text>

        <ScrollView style={{flex: 1}}>
          <Centered>
            {/*first name  */}
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> First Name </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput
                    placeholder={''}
                    value={this.state.firstname}
                    onChangeText={str => this.setState({firstname: str})}
                  />
                </Shadow>
              </View>
            </View>
            {/*last name  */}
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> Last Name </Text>
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
            {/*Email ID  */}
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> E-mail ID </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput
                    placeholder={'abc@xyz.com'}
                    email
                    value={this.state.lastname}
                    onChangeText={str => this.setState({lastname: str})}
                  />
                </Shadow>
              </View>
            </View>
            {/*birthday  */}
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> Date of Birth </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  {/* <TextInput placeholder={"01/01/1990"} date/> */}
                  <DatePicker
                    // style={{width: 200}}
                    date={this.state.birthday}
                    mode="date"
                    placeholder=""
                    format="YYYY-MM-DD"
                    minDate="1960-01-01"
                    maxDate="2050-12-31"
                    showIcon={false}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        fontsize: 20,
                        borderWidth: 0,
                      },
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={date => {
                      this.setState({birthday: date});
                    }}
                  />
                </Shadow>
              </View>
            </View>
            {/*sex  */}
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}>Sex</Text>
              </View>
              <View
                style={{flex: 0.3, flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="m"
                  color={colors.dark}
                  status={checked === 'm' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: 'm'});
                  }}
                />
                <Text color={colors.black}>M</Text>
              </View>
              <View
                style={{flex: 0.3, flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="f"
                  color={colors.dark}
                  status={checked === 'f' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: 'f'});
                  }}
                />
                <Text color={colors.black}>F</Text>
              </View>
            </View>

            {/*allergies  */}
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> Weight </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput placeholder={'..Kg'} number />
                </Shadow>
              </View>
            </View>
            {/*weight  */}
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> Allergies </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput placeholder={''} />
                </Shadow>
              </View>
            </View>
            {/*Blood group  */}
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingVertical: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.4, alignItems: 'flex-start'}}>
                <Text color={colors.black}> Blood Group </Text>
              </View>
              <View style={{flex: 0.6}}>
                <Shadow>
                  <TextInput placeholder={''} />
                </Shadow>
              </View>
            </View>
          </Centered>

          <DarkButton onPress={() => navigate(routes.register2)}>
            <Text color={colors.white}>{buttons.con}</Text>
          </DarkButton>

          <View style={{marginTop: 50}} />
        </ScrollView>
      </Container>
    );
  }
}
