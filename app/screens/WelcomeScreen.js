import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AppButton from '../components/AppButton'

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate('Register')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    padding: 15
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
})

export default WelcomeScreen;