import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './DetailsPageStyle';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import LastDay from '../../components/LastDay/LastDay';
import {useAppSelector} from '../../redux/hooks';
import {extractTextFromHTML} from '../../utils/htmlUtils';
import RoundedLogo from '../../components/RoundedLogo/RoundedLogo';

const DetailsPage: React.FC = () => {
  // Redux kullanarak detaylarınızı alın
  const {ImageUrl, BrandIconUrl, RemainingText, Title, Description} =
    useAppSelector(state => state.promotionDetails.promotionDetails);

  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={{uri: ImageUrl}}
          style={styles.image}
          resizeMode="center"
        />

        <View style={styles.roundedLogo}>
          <RoundedLogo BrandIconUrl={BrandIconUrl} />
        </View>

        <BackButton />

        <View style={styles.lastDay}>
          <LastDay remainingText={RemainingText} />
        </View>
      </View>
      <View style={styles.textArea}>
        <View style={styles.headerTextArea}>
          <Text style={styles.headerText}>{extractTextFromHTML(Title)}</Text>
        </View>

        <View style={styles.explainTextArea}>
          <Text style={styles.explainText}>
            {extractTextFromHTML(Description)}
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button />
      </View>
    </View>
  );
};

export default DetailsPage;
