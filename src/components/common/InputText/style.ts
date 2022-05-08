import {StyleSheet} from 'react-native';
import {normalize, responsiveSize, theme} from '../../../utils';

const styles = StyleSheet.create({
  inputContainer: {
    // height: responsiveSize(44),
    flexDirection: 'row',
  },
  inputField: {
    color: theme.global.black,
    flex: 1,
    borderBottomWidth: responsiveSize(1),
    paddingVertical: responsiveSize(18),
    fontWeight: '500',
    fontSize: normalize(22),
    fontFamily: 'Lato-Medium',
  },
});
export default styles;
