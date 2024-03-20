import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

function OtherScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'default'}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40
      }}>
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: '#fc5c65'
        }} />
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: '#4ecdc4'
        }} />
      </View>
      <Image source={require('../assets/chair.jpg')} style={styles.image} />
    </SafeAreaView>
  );
}

export default OtherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    height: '70%',
    width: '100%',
    top: 50,
  }
})