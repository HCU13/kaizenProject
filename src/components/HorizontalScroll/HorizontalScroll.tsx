import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import ScrollItem from './ScrollItem';

interface HorizontalScrollProps {
  items: {
    Id: number;
    Name: string;
    IconUrl: string;
  }[];
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({items}) => {
  // Seçilen öğe durumu ve seçme işlevi
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  // Öğe seçme işlevi
  const handleItemPress = (itemId: number) => {
    setSelectedItemId(itemId);
  };

  return (
    // Yatay kaydırma görünümü
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <ScrollItem
          key={item.Id || index}
          item={item}
          isSelected={item.Id === selectedItemId}
          onPress={() => handleItemPress(item.Id)}
        />
      ))}
    </ScrollView>
  );
};

export default HorizontalScroll;
