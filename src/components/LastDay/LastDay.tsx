import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './LastDayStyle';
import {calculateRemainingDays} from '../../utils/remeaningDay';
interface LastDayProps {
  remainingText: string;
}

const LastDay: React.FC<LastDayProps> = ({remainingText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{calculateRemainingDays(remainingText)}</Text>
    </View>
  );
};

export default LastDay;
