import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import Icon from './Icon'

const PickerItem = ({ backgroundColor, icon, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon} backgroundColor={backgroundColor} size={60} />
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  )
}

export default PickerItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    gap: 5
  },
  text: {
    textAlign: 'center',
  }
})