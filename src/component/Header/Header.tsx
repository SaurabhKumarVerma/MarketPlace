import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

/**
 * The Header component is a custom header component that renders a hamburger menu button.
 *
 * This component utilizes the `useNavigation` hook from the `@react-navigation/native`
 * package to access the navigation stack and dispatches the `DrawerActions.openDrawer`
 * action when the hamburger menu button is pressed. This allows the user to open the side
 * menu to access the app's navigation options.
 *
 * The component is styled using the `StyleSheet` API from the `react-native` package.
 */

const Header = () => {
  const navigation = useNavigation();

  /**
   * Toggles the drawer's open state.
   *
   * This function dispatches the `DrawerActions.openDrawer` action to the navigation
   * stack. This will open the drawer if it is closed, or close the drawer if it is
   * already open.
   */
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Pressable style={styles.container} onPress={toggleDrawer}>
      <Icon name="menu" size={30} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
});
export default Header;
