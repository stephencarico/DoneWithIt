import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      </View>
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
      <View style={styles.buttonsContainer}>
        <Button>Login</Button>
        <Button color="secondary">Register</Button>
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
    paddingHorizontal: 15,
    paddingBottom: 30,
    gap: 15,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
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
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  tagline: {
    position: 'absolute',
    alignItems: 'center',
    top: 200,
    fontSize: 25,
    fontWeight: '600'
  },
})

export default WelcomeScreen;