import React from 'react';
import {ScrollView, Text} from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </ScrollView>
  );
};

export default Home;
