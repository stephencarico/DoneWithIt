import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from '../AppText'
import colors from '../../config/colors'

function ListItem({ image, IconComponent, onPress, showChevrons, title, renderRightActions, subTitle }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          { image && <Image source={image} style={styles.image} /> }
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            { subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText> }
          </View>
          { showChevrons && <MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium} /> }
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100 / 2,
  },
  subTitle: {
    color: colors.medium
  },
  detailsContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: '500'
  }
})

export default ListItem;