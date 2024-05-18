import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './HorizontalScrollStyle';

interface Item {
  Id: number;
  Name: string;
  IconUrl: string;
}

// ScrollItem bileşeni için prop tipleri
interface ScrollItemProps {
  item: Item;
  isSelected: boolean;
  onPress: () => void;
}

// ScrollItem bileşeni
const ScrollItem: React.FC<ScrollItemProps> = ({item, isSelected, onPress}) => {
  // Öğe verisinden ikon URL'si ve adını çıkarma
  const {IconUrl, Name} = item;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.itemContainer, isSelected && {borderColor: 'red'}]}>
        <Image source={{uri: IconUrl}} style={styles.itemImage} />

        <Text style={styles.itemText}>{Name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScrollItem;
