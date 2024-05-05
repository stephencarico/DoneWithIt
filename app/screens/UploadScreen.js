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
          style={{
            width: '50%',
            height: '50%',
          }}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default UploadScreen;