import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity, StyleSheet, View } from'react-native';

import colors from '../config/colors'

function tabBarButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialCommunityIcons name='plus-circle' size={35} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    top: -15,
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 5
  },
})

export default tabBarButton;