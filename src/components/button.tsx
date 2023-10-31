import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {buttonStyles as styles} from './styles';

type Props = {
  text: string;
  onPress?: () => void;
  disabled: boolean;
};

const Button: React.FC<Props> = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {opacity: disabled ? 0.5 : 1}]}
      activeOpacity={disabled ? 1 : 0.7}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
