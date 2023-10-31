import React from 'react';
import {View, Pressable} from 'react-native';
import XItem from './xItem';
import {cellStyles as styles} from './styles';

type Props = {
  cell: string;
  onPress: () => void;
  disabled: boolean;
};

const Cell: React.FC<Props> = ({cell, onPress, disabled}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={styles.cell}
      disabled={disabled}>
      {cell === 'o' && <View style={styles.circle} />}
      {cell === 'x' && <XItem />}
    </Pressable>
  );
};

export default Cell;
