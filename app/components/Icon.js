import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Icon({
  name,
  iconColor = '#fff',
  backgroundColor = '#000',
  size = 40
}) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5 } />
    </View>
  )
}

const styles = StyleSheet.create({
  iconCircle: {
    height: 35,
    width: 35,
    borderRadius: 100 / 2,
    marginRight: 10,
  },
})