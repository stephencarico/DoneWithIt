import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Screen from '../components/Screen'
import Icon from '../components/Icon'
import { ListItem, ListItemSeparator } from '../components/lists'
import colors from '../config/colors'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      backgroundColor: colors.primary,
      name: 'format-list-bulleted',
    },
    to: 'Listings'
  },
  {
    title: 'My Messages',
    icon: {
      backgroundColor: colors.secondary,
      name: 'email',
    },
    to: 'Messages'
  },
]

export default function MyAccountScreen() {
  const navigation = useNavigation();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Mosh Hamedami'
          subTitle='programmingwithmosh@gmail.com'
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.to)}
            />
          }
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={
          <Icon
            name='logout'
            backgroundColor={colors.warning}
          />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light
  }
})