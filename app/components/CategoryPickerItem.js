import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import Icon from './Icon'

const PickerItem = ({ item, onPress }) => {
  return (
    <View onPress={onPress} style={styles.container}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  )
}

export default PickerItem

const styles = StyleSheet.create({
  container: {
    width: '33%',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  }
})