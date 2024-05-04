import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import Screen from '../components/Screen'

function UploadScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <LottieView
        autoPlay
        loop={false}
        source={require('../assets/animations/done.json')}
        onAnimationFinish={() => {
          setTimeout(() => {
            navigation.navigate('ListingEdit')
          }, 1000)
        }}
        style={{
          width: '50%',
          height: '50%',
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default UploadScreen;