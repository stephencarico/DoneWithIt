import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../config/colors'
import borderRadius from '../config/borderRadius'

function Button({title, color = 'primary', onPress}) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.md,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})