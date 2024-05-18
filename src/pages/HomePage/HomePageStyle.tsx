// MyComponentStyle.tsx
import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../theme/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  sliderContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  selectionCategoryContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoArea: {
    flex: 1.5,
    justifyContent: 'center',
  },
  loginArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginTouchable: {
    height: 40,
    width: 91,
    backgroundColor: colors.red,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: colors.white,
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    lineHeight: 13.8,
  },
  profileIcon: {
    backgroundColor: colors.black,
    height: 40,
    width: 40,
    borderRadius: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 81,
    height: 40,
  },
  profileIconImage: {
    width: 20,
    height: 20,
  },
});
