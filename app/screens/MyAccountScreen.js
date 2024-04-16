import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator'

export default function MyAccountScreen() {
  const settings = [
    {
      title: 'My Listings',
      icon: {
        name: 'format-list-bulleted',
        color: colors.primary,
      }
    },
    {
      title: 'My Messages',
      icon: {
        name: 'email',
        color: colors.secondary,
      }
    },
  ]
  const user = {
    name: 'Mosh Hamedami',
    email: 'programmingwithmosh@gmail.com',
    image: require('../assets/mosh.jpg')
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.profile}>
          <ListItem
            title={user.name}
            subTitle={user.email}
            image={user.image}
          />
        </View>
        <View>
          <FlatList
            data={settings}
            keyExtractor={setting => setting.title}
            renderItem={({ item }) =>
              <ListItem
                title={item.title}
                icon={item.icon}
              />
            }
            ItemSeparatorComponent={ListItemSeparator}
            style={styles.settingsList}
          />
        </View>
        <View style={styles.settingsList}>
          <ListItem
            title='Log Out'
            icon={{ name: 'logout', color: colors.warning }}
          />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  },
  profile: {
    backgroundColor: colors.white,
    marginBottom: 30,
    marginTop: 10
  },
  settingsList: {
    backgroundColor: colors.white,
    marginBottom: 20
  }
})