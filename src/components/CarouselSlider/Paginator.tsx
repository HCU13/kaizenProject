import React from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';

// Paginator bileşeni için prop tipleri
interface PaginatorProps {
  data: any[]; // Veri dizisi tipini güncelleyebilirsiniz.
  scrollX: Animated.Value;
}

const Paginator: React.FC<PaginatorProps> = ({data, scrollX}) => {
  const width = Dimensions.get('window').width;

  // Diziyi haritalayarak her bir nokta için bir Animated.View döndürme
  return (
    <View style={paginatorStyles.container}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        // Nokta genişliğini hesaplama ve animasyonlu olarak ayarlama
        const dotWidth =
          scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp',
          }) || 0;

        return (
          <Animated.View
            key={index.toString()}
            style={[paginatorStyles.dot, {width: dotWidth}]}
          />
        );
      })}
    </View>
  );
};

// Stil tanımları
const paginatorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
});

export default Paginator;
