import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontSizes} from '../../theme/theme';
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    width: '100%',
    height: 56,
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: fontSizes.medium,
    lineHeight: 16.1,
    textAlign: 'center',
    color: colors.white,
  },
});
