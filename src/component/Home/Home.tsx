import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Home</Text>
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
export default Home;
