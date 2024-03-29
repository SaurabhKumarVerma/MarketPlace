import {Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {routes} from './Route';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';

/**
 * The CustomBottomTabBar component is a customized tab bar component that is used as a tab bar for the tab
 * navigator in the BottomNavigation component.
 *
 * The CustomBottomTabBar component receives the following default props from the tab navigator:
 *  - descriptors: an object that holds all the information of the tabs and their navigation
 *  - state: an object that holds all the information about the navigator state
 *  - navigation: an object that holds all the information about the navigation
 *
 * The component uses the descriptors and state props to map through the tabs and display them with the appropriate
 * icons. The icons are determined by a switch statement based on the route name. The active icon is displayed with
 *  a different color than the inactive icon.
 *
 */
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      {routes.map(route => {
        return (
          <DrawerItem
            key={route.name}
            label={() => <Text>{route.title}</Text>}
            onPress={() => props.navigation.navigate(route.name)}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
