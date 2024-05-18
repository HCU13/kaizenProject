import React from 'react';
import {Image} from 'react-native';
import {styles} from './RoundedLogoStyle';

interface RoundedLogoProps {
  BrandIconUrl: any;
}

const RoundedLogo: React.FC<RoundedLogoProps> = ({BrandIconUrl}) => {
  return (
    <Image
      source={{uri: BrandIconUrl}}
      style={styles.image}
      resizeMode="contain"
    />
  );
};

export default RoundedLogo;
