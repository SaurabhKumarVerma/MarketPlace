import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Header/Header';

const Learn = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Learn</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
export default Learn;
