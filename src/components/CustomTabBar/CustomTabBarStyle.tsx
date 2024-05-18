import {StyleSheet, Platform} from 'react-native';
import {colors, fontSizes} from '../../theme/theme';
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 100 : 80,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: colors.grey,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  tabText: {
    color: 'grey',
    fontSize: fontSizes.medium,
    lineHeight: 11.5,
    letterSpacing: 0.5,
    fontWeight: '700',
    padding: 3,
    top: '15%',
  },
  focusedText: {
    color: '#000',
    fontWeight: 'bold',
  },
  centerButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 45 : 25,
    left: '50%',
    marginLeft: -34.5,
    width: 69,
    height: 69,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 6}, // X: 0, Y: 4
    shadowOpacity: 1, // Opacity değeri
    shadowRadius: 1, // Blur değeri
    elevation: 5,
    borderTopColor: colors.green,
    borderWidth: 2,
    borderLeftColor: colors.red,
    borderBottomColor: colors.orange,
    borderRightColor: colors.yellow,
  },
  centerButtonIcon: {
    width: 40,
    height: 40,
  },
  iconStyle: {
    width: 26,
    height: 26,
  },
});
export default styles;
