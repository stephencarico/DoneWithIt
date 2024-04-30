import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity, StyleSheet } from'react-native';

import colors from '../config/colors'

function tabBarButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialCommunityIcons name='plus-circle' size={40} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 80 / 2,
    borderWidth: 10,
    bottom: 20,
    justifyContent: 'center',
    height: 80,
    width: 80,
  },
})

export default tabBarButton;