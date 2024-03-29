import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Learn from '../../component/Learn/Learn';
import Marketplace from '../../component/Marketplace/Marketplace';
import Community from '../../component/Community/Community';
import CustomBottomTabBar from './CustomBottomTabBar';
import {BottomNavigatorType} from '../../types/BottomNavigationType/BottomNavigatorType';
import StackNavigator from '../StackNavigator/StackNavigator';

/**
 * The BottomNavigation component is a custom bottom navigation bar that renders three tabs:
 * Home, Learn, and Market.
 *
 * This component uses the `createBottomTabNavigator` function from the `@react-navigation/bottom-tabs`
 * package to create the tab navigation bar. The `CustomBottomTabBar` component is used as the
 * `tabBar` prop, which renders a custom tab bar with the appropriate icons.
 *
 * The `BottomNavigator` component also utilizes the `useNavigation` hook from the `@react-navigation/native`
 * package to access the navigation stack and pass the `navigation` object to the `CustomBottomTabBar` component.
 */

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTabBar {...props} />;
};

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<BottomNavigatorType>();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={CustomBottomTabs}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Market" component={Marketplace} />
      <Tab.Screen name="Community" component={Community} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
