import { StyleSheet, FlatList, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function MyAccountScreen() {
  const [user, setUser] = useState({
    name: 'Mosh Hamedami',
    email: 'programmingwithmosh@gmail.com',
    image: require('../assets/mosh.jpg')
  })

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
    marginVertical: 10
  }
})