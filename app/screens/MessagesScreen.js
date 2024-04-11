import { FlatList, StyleSheet } from 'react-native'
import React from 'react'

import ListItem from '../components/ListItem'

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
  },
]

const MessagesScreen = () => {
  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) => 
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      }
    />
  )
}

export default MessagesScreen

const styles = StyleSheet.create({})