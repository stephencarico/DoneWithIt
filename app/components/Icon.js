import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Icon({ name, iconColor, backgroundColor, size }) {
  return (
    <View style={[styles.iconCircle, { backgroundColor }]}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
  iconCircle: {
    height: 35,
    width: 35,
    borderRadius: 100 / 2,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
})