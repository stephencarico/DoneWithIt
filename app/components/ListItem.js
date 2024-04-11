import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

import colors from '../config/colors'

function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100 / 2,
    marginRight: 10
  },
  subTitle: {
    color: colors.medium
  },
  title: {
    fontWeight: '500'
  }
})

export default ListItem;