import React from 'react';
import CustomDrawer from './CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from '../BottomNavigator/BottomNavigator';

// CustomDrawer component for the navigation drawer in the application. It includes the header with title and menu items with icons.

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Root"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Root"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
