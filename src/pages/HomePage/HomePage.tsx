import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { styles } from "./HomePageStyle";
import HorizontalScroll from "../../components/HorizontalScroll/HorizontalScroll";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Get_Tags_Request } from "../../redux/slices/TagsSlice";
import { Get_Promotion_Request } from "../../redux/slices/PromotionSlice";
import { useNavigation } from "@react-navigation/native";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tags.tags); // Etiketleri al
  const promotion = useAppSelector((state) => state.promotion.promotion); // Promosyonları al
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  console.log(tags);
  
  // Verilerin getirilmesi
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Etiket ve promosyonları getirme isteği
        await dispatch(Get_Tags_Request());
        await dispatch(Get_Promotion_Request());
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false); // Veriler getirildiğinde yükleniyor durumunu kapat
      }
    };
    fetchData(); // Veri getirme işlevini çağır
  }, [dispatch]);

  // Eğer veriler yükleniyorsa, yükleniyor göstergesini göster
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Ana sayfa görünümü
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logoArea}>
            <Image
              source={require("../../assets/logo/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.loginArea}>
            <TouchableOpacity style={styles.loginTouchable}>
              <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>

            <View style={styles.profileIcon}>
              <Image
                source={require("../../assets/icons/profileIcon.png")}
                style={styles.profileIconImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View style={styles.selectionCategoryContainer}>
          <HorizontalScroll items={tags} />
        </View>
      </View>

      <View style={styles.sliderContainer}>
        <CarouselSlider data={promotion} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
