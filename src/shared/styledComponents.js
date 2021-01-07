import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors,fontsize } from './constants';

const { width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.creamy};
`;

export const Centered = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${colors.creamy};
  `;

export const Shadow = styled.View`
  align-items: center;
  justify-content: center; 
  background-color: ${colors.white};
  border-color: ${colors.bright};
  border-width: 0.5px;
  border-radius: 10px;
  shadowColor: ${colors.black};
  shadowOffset: {
    width: 0,
    height: 4,
  };
  shadowOpacity: 0.10;
  shadowRadius: 4.65;
  elevation: 8;
  
`;
export const FlexCentered = styled(Centered)`
  flex: 1;
`;

export const TextInput = styled.TextInput.attrs(props => ({
  autoCorrect: false,
  autoCapitalize: 'none',
  returnKeyType: 'done',
  placeholder: props.placeholder,
  secureTextEntry: props.password,
}))`
  font-size: 18px;
  text-align:center;
  width:100%;
  padding: 10px;
  
 
`;

export const DarkButton = styled.TouchableOpacity`
  shadowColor: ${colors.black};
  shadowOffset: {
    width: 0,
    height: 12,
  };
  shadowOpacity: 0.58;
  shadowRadius: 3.00;
  elevation: 8;

  background-color: ${colors.dark};
  width: ${width * 0.9}px;
  height: 55px;
  padding: 16px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;
export const WhiteButton = styled.TouchableOpacity`
shadowColor: ${colors.white};
shadowOffset: {
  width: 0,
  height: 12,
};
shadowOpacity: 0.58;
shadowRadius: 4.00;
elevation: 8;
  background-color: ${colors.white};
  width: ${width * 0.9}px;
  height: 55px;
  padding: 16px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;
export const SmallButton = styled.TouchableOpacity`
  background-color: ${props => (props.color ? props.color : colors.dark)};
  padding: 10px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 800;
  text-align:center;
  color: ${props => (props.color ? props.color : colors.dark)};
`;

export const TitleText = styled.Text`
  font-size: ${fontsize.label};
  font-weight: bold;
  text-align:center;
  color: ${props => (props.color ? props.color : colors.dark)};
`;


export const LongText = styled.Text`
  font-size: 25px;
  font-weight: 800;
  text-align:center;
  margin: 10px;
  color: ${props => (props.color ? props.color : colors.dark)};
`;
