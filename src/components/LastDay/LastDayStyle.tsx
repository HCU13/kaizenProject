import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../theme/theme';
export const styles = StyleSheet.create({
  container: {
    height: 43,
    width: 120,
    borderRadius: 20,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: fontSizes.medium,
    color: colors.white,
    lineHeight: 14.95,
    letterSpacing: -0.54,
    textAlign: 'center',
  },
});
