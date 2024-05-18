import {StyleSheet} from 'react-native';
import {colors, fontSizes, spacing} from '../../theme/theme';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.small,
    borderColor: colors.shadow,
    borderWidth: 1.5,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    left: 15,
    width: 123,
    height: 36,
  },
  selectedItem: {
    borderColor: colors.red,
  },
  itemImage: {
    width: 24,
    height: 24,
    borderRadius: 7,
    marginRight: spacing.small,
  },
  itemText: {
    fontSize: fontSizes.small,
    color: colors.black,
    lineHeight: 13.8,
    fontWeight: '400',
  },
});
