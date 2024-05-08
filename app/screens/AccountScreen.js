import React, { useContext } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Screen from '../components/Screen'
import Icon from '../components/Icon'
import { ListItem, ListItemSeparator } from '../components/lists'
import colors from '../config/colors'
import routes from '../navigation/routes'
import AuthContext from '../auth/context'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      backgroundColor: colors.primary,
      name: 'format-list-bulleted',
    },
  },
  {
    title: 'My Messages',
    icon: {
      backgroundColor: colors.secondary,
      name: 'email',
    },
    targetScreen: routes.MESSAGES
  },
]

export default function AccountScreen() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
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
              onPress={() => navigation.navigate(item.targetScreen)}
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