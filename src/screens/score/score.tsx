import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Score: React.FC = ({navigaiton, route}) => {
  const {score} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Player X Score: {score.x}</Text>
      <Text style={styles.text}>Player O Score: {score.o}</Text>
    </View>
  );
};

export default Score;
