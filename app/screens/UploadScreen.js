import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

function UploadScreen({ visible }) {
  return (
    <Modal visible={visible}>
      <View style={styles.screen}>
        <LottieView
          autoPlay
          loop={false}
          source={require('../assets/animations/done.json')}
          style={styles.animation}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
    height: 150,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

export default UploadScreen;