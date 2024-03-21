import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import colors from '../../config/colors'
import borderRadius from '../../config/borderRadius'

function Button({children}) {
  const handlePress = () => console.log('pressed!');

  return (
    <TouchableHighlight onPress={handlePress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.sm,
    backgroundColor: colors.primary,
    padding: 10,
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