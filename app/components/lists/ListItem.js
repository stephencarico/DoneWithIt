import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
            <AppText style={styles.title}>{title}</AppText>
            { subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText> }
          </View>
          { showChevrons && <MaterialCommunityIcons name='chevron-right' size={25} style={styles.chevronIcon} /> }
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white
  },
  chevronIcon: {
    color: colors.medium,
    alignSelf: 'center'
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