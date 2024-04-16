import { FlatList, StyleSheet } from 'react-native'

import React, { useState } from 'react'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = ({ id }) => {
    setMessages(messages.filter(message => message.id !== id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => 
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected: ', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        }
        ItemSeparatorComponent={<ListItemSeparator />}
      />
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
})