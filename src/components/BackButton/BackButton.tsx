import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './BackButtonStyle';

// Geri butonu bileşeni
const BackButton: React.FC = () => {
  const navigation = useNavigation();

  // Geri git fonksiyonunu tetikleyen TouchableOpacity bileşeni
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      {/* Geri butonu ikonu */}
      <Image
        source={require('../../assets/icons/backIcon.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackButton;
