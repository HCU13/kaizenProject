import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './ButtonStyle';

// Özel bir buton bileşeni
const Button: React.FC = () => {
  return (
    // Dokunma etkinliği için TouchableOpacity bileşeni
    <TouchableOpacity style={styles.container}>
      {/* Buton metni */}
      <Text style={styles.buttonText}>Hemen Katıl</Text>
    </TouchableOpacity>
  );
};

export default Button;
