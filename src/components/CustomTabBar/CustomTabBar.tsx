// src/components/customTabBar/CustomTabBar.tsx

import React from 'react';
import {Text, TouchableOpacity, SafeAreaView, View, Image} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './CustomTabBarStyle';

interface TabItem {
  name: string; // Sekme adı
  component: React.ComponentType<any>; // Sekme bileşeni
  icon: any; // Sekme ikonu
  iconsurce: string; // Sekme ikonunun kaynağı
}

// Özel Tab Bar bileşeni için prop tipleri
interface CustomTabBarProps extends BottomTabBarProps {
  tabs: TabItem[]; // Sekmeler dizisi
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  navigation,
  tabs,
}) => {
  return (
    <SafeAreaView style={styles.tabContainer}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: tab.name,
            canPreventDefault: true,
          });

          // Eğer mevcut sekme odaklı değilse ve varsayılan işlem engellenmemişse, sekme değiştirme işlemi gerçekleştirilir.
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name);
          }
        };

        if (tab.name === 'Ortadaki Buton') {
          return (
            // Özel buton görünümü
            <View key={index} style={styles.centerButton}>
              <Image source={tab.icon} style={styles.centerButtonIcon} />
            </View>
          );
        }

        // Diğer sekme öğeleri
        return (

          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabButton}>
            <Image source={tab.iconsurce} style={styles.iconStyle} />

            <Text
              style={[styles.tabText, isFocused ? styles.focusedText : null]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default CustomTabBar;
