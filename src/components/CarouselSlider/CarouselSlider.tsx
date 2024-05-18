import React, {useRef} from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Paginator from './Paginator';
import styles from './CarouselSliderStyle';
import LastDay from '../LastDay/LastDay';
import {extractTextFromHTML} from '../../utils/htmlUtils';
import RoundedLogo from '../RoundedLogo/RoundedLogo';
import {useAppDispatch} from '../../redux/hooks';
import {Get_PromotionDetails_Request} from '../../redux/slices/PromotionDetails';
import {useNavigation} from '@react-navigation/native';

// Tanımlı bir Promosyon veri yapısı
interface Promotion {
  ImageUrl: string;
  Title: string;
  RemainingText: string;
  BrandIconUrl: string;
  Id: number;
}

// CarouselSlider bileşeni için prop tipleri
interface CarouselSliderProps {
  data: Promotion[];
}

const CarouselSlider: React.FC<CarouselSliderProps & {navigation: any}> = ({
  data,
}) => {
  const navigation = useNavigation();

  // Redux dispatch ve state kullanımı
  const dispatch = useAppDispatch();

  // Kaydırma değerini tutan referans
  const scrollX = useRef(new Animated.Value(0)).current;

  // Kaydırma olayını işleyen fonksiyon
  const handleOnScroll = (index: number) => {
    Animated.timing(scrollX, {
      toValue: index * 400, // Her öğe genişliği varsayılan olarak 400 olarak kabul ediliyor
      duration: 90,
      useNativeDriver: false,
    }).start();
  };

  // Öğeye tıklama olayını işleyen fonksiyon
  const handleItemPress = async (Id: number) => {
    try {
      // Redux eylemi ile promosyon detaylarını request
      await dispatch(Get_PromotionDetails_Request({Id: Id}));
      // Detaylar sayfasına yönlendirme
      navigation.navigate('DetailsPage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        width={400}
        loop={false}
        mode="parallax"
        height={550}
        pagingEnabled={true}
        data={data} // Veri
        onSnapToItem={index => {
          handleOnScroll(index);
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => handleItemPress(item.Id)}
              activeOpacity={0.6}>
              <View style={styles.itemContainer}>
                <Image source={{uri: item.ImageUrl}} style={styles.image} />
                <View style={styles.brandIconUrl}>
                  <RoundedLogo BrandIconUrl={item.BrandIconUrl} />
                </View>

                <View style={styles.lastDay}>
                  <LastDay remainingText={item.RemainingText} />
                </View>

                <View style={styles.textArea}>
                  <Text style={styles.title}>
                    {extractTextFromHTML(item.Title)}
                  </Text>

                  <Text style={styles.expiry}>Daha Daha</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* Sayfalama alanı */}
      <View style={styles.paginationArea}>
        <Paginator data={data} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default CarouselSlider;
