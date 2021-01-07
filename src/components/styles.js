import { StyleSheet } from 'react-native';
import { colors } from '../shared';
import { fontsize } from '../shared/constants';

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:colors.bright,
    borderBottomColor:colors.grey,
    borderBottomWidth:1,
    paddingVertical:20
  },
  label: {
    flex:1,justifyContent:'center',alignItems:'flex-start',
  },
  btnContainer: {
    backgroundColor:colors.bakcdark,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:20
  },
  btnIcon: {
    flex:0.2,
    alignItems:'center', justifyContent:'flex-start',
  },
  btnText: {
    fontFamily: 'FallingSkyCond',
    fontSize: 16,
    fontWeight:'bold',
    color:colors.dark,
  },
  item:{
    color:colors.black,
    fontSize:fontsize.button,
    textAlign:'left'
  },
  val:{
    color:colors.dark,
    fontSize:fontsize.text,
    textAlign:'left'
  },
});

export default styles;
