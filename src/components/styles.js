import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    color: 'white',
    margin: 10,
    fontSize: 16,
    backgroundColor: '#32a856',
    paddingVertical: 14,
    paddingHorizontal: 30,
  },
  text: {
    color: '#fff',
  },
});

export const cellStyles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    flex: 1,
  },
  circle: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,

    borderWidth: 10,
    borderColor: 'white',
  },
});

export const xStyles = StyleSheet.create({
  xContainer: {
    flex: 1,
  },
  xLine: {
    position: 'absolute',
    left: '48%',
    width: 10,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
  xLineReversed: {
    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },
});
