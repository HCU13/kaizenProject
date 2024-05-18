import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../theme/theme';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 100 : 40,
    left: 20,
    backgroundColor: colors.black,
    borderRadius: 50,
    padding: 3,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 25, height: 25},
});
export default styles;
