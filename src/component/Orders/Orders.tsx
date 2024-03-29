import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../Header/Header';

const Orders = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Orders</Text>
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
export default Orders;
