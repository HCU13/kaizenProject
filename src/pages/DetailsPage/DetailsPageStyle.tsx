import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontSizes} from '../../theme/theme';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageArea: {
    height: 350,
    borderBottomStartRadius: 200,
  },
  image: {
    flex: 1,
    width: width,
    borderBottomLeftRadius: 200,
  },
  textArea: {
    flex: 1,
    margin: 15,
  },
  headerTextArea: {flex: 1, textAlign: 'left', marginTop: 10},
  headerText: {
    fontWeight: '700',
    fontSize: fontSizes.extraLarge,
    lineHeight: 29.9,
    letterSpacing: -0.2,
  },
  explainText: {
    fontWeight: '400',
    fontSize: fontSizes.medium,
    lineHeight: 22,
    color: colors.black,
  },
  explainTextArea: {flex: 5},
  button: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
    height: 56,
  },
  lastDay: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  roundedLogo: {
    position: 'absolute',
    left: 10,
    bottom: 0,
  },
});
