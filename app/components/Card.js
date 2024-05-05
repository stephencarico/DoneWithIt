import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-expo-image-cache'

import AppText from './AppText'

import colors from '../config/colors'
import borderRadius from '../config/borderRadius'

function Card({ imageUrl, onPress, subTitle, title, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: thumbnailUrl }}
        uri={imageUrl}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.sm,
    marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  }
})

export default Card;