import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../theme/theme';
const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ddd',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    borderRadius: 16,
    height: '65%',
    width: '99%',
    margin: 4,
    borderBottomLeftRadius: 140,
  },
  title: {
    fontSize: fontSizes.large,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.22,
    marginHorizontal: 40,
  },
  expiry: {
    fontSize: fontSizes.large,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 16.1,
    padding: 2,
    color: colors.red,
  },
  textArea: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: 'red',
    marginHorizontal: 2,
    borderRadius: 20,
  },
  paginationArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    bottom: '22%',
  },
  lastDay: {
    position: 'absolute',
    right: 10,
    bottom: 200,
  },
  brandIconUrl: {
    position: 'absolute',
    bottom: 190,
    left: 8,
  },
});
export default styles;
