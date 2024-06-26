import { FlatList, StyleSheet } from 'react-native'

import React, { useState } from 'react'

import { ListItem, ListItemSeparator, ListItemDeleteAction } from '../components/lists'
import Screen from '../components/Screen'

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
  const [refreshing, setRefreshing] = useState(false);
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
            showChevrons
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected: ', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        }
        ItemSeparatorComponent={<ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg')
            },
          ])
        }}
      />
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
})