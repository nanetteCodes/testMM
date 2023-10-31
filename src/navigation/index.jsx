import React from 'react';
import {StatusBar, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {route} from '/constants';
import linking from './linking';
import Home from '/screens/home/home';

const Stack = createNativeStackNavigator();

const StackNavigatior = () => (
  <Stack.Navigator mode="modal" initialRouteName={route.HOME}>
    {/* <Stack.Screen
				name={'BottomTabs'}
				component={BottomTabs}
				options={{
					headerShown: false,
				}}
			/> */}
    <Stack.Screen name={route.HOME} component={Home} />
  </Stack.Navigator>
);
const Navigation = () => (
  <NavigationContainer linking={linking}>
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={{backgroundColor: Colors.lighter}}
      />
      <StackNavigatior />
    </View>
  </NavigationContainer>
);

export default Navigation;
