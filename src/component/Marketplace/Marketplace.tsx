import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Header/Header';

const Marketplace = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Marketplace</Text>
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
export default Marketplace;
