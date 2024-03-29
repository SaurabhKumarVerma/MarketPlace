import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../component/Profile/Profile';
import Activities from '../../component/Activities/Activities';
import Orders from '../../component/Orders/Orders';
import {StackNavigatorType} from '../../types/StackNavigationType/StackNavigationType';
import Home from '../../component/Home/Home';

// StackNavigator component that sets up the navigation for the application using native-stack
// navigator. It includes four screens - Home, My Profile, My Orders, and My Activities.

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<StackNavigatorType>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="My Profile" component={Profile} />
      <Stack.Screen name="My Orders" component={Orders} />
      <Stack.Screen name="My Activities" component={Activities} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
