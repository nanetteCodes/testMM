import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottomNavTabs} from '/constants';

import Home from '../screens/home/home';

const Tab = createBottomTabNavigator();

export default ({route}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={bottomNavTabs.HOME} component={Home} />
    </Tab.Navigator>
  );
};
