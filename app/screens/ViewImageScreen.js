import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="close" size={32} color="green" style={styles.closeIcon} />
      <MaterialCommunityIcons name="trash-can-outline" size={32} color="black" style={styles.deleteIcon} />
      <Image
        style={styles.image}
        resizeMode='contain'
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
    alignItems: 'center',
    color: colors.white
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
    color: colors.white
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

export default ViewImageScreen;