import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import borderRadius from '../../config/borderRadius'

function Card({image, subTitle, title}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.headerImage} />
      <View style={styles.body}>
        <Text>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 15,
    gap: 10
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.sm,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: borderRadius.sm,
    borderTopRightRadius: borderRadius.sm,
  },
  subTitle: {
    color: colors.secondary
  },
})

export default Card;