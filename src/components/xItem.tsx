import React from 'react';
import {View} from 'react-native';
import {xStyles as styles} from './styles';

const XItem: React.FC = () => {
  return (
    <View style={styles.xContainer}>
      <View style={styles.xLine} />
      <View style={[styles.xLine, styles.xLineReversed]} />
    </View>
  );
};

export default XItem;
