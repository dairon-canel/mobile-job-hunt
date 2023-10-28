import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './nearbyjobcard.style';

import { checkImageUrl } from '../../../../utils';

const placeholderImage =
  // eslint-disable-next-line max-len
  'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg';

const NearbyJobCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageUrl(item?.employer_logo)
              ? item?.employer_logo
              : placeholderImage
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.job_title}
        </Text>
        <Text style={styles.jobType}>{item?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
