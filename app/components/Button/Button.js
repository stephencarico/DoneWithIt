import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import colors from '../../config/colors'
import borderRadius from '../../config/borderRadius'

function Button({children, color = 'primary'}) {
  const handlePress = () => console.log('pressed!');

  return (
    <TouchableHighlight onPress={handlePress} style={styles.container}>
      <View style={[styles.button, styles[color]]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default Button;

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  button: {
    borderRadius: borderRadius.sm,
    padding: 15,
    alignItems: 'center'
  },
  container: {
    borderRadius: borderRadius.sm,
    width: '100%',
  },
  text: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})