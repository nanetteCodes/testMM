import {route} from '../constants';

export default {
  config: {
    initialRouteName: route.HOME,
    screens: {
      [route.BOTTOM_TABS]: {
        screens: {
          [route.HOME]: '/',
        },
      },
    },
  },
};
