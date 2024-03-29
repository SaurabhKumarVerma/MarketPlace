import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Header/Header';

const Activities = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Activities</Text>
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

export default Activities;
