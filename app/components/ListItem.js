import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'

function ListItem({ image, onPress, title, renderRightActions, subTitle }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
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
  textContainer: {
    justifyContent: 'center'
  },
  title: {
    fontWeight: '500'
  }
})

export default ListItem;