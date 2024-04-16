import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'

import Card from '../components/Card';

function ListingsScreen() {
  const listings = [
    {
      title: 'Red jacket for sale!',
      price: '$100',
      image: require('../assets/jacket.jpg')
    },
    {
      title: 'Couch in great condition',
      price: '$100',
      image: require('../assets/couch.jpg')
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.listArea}>
        <FlatList
          data={listings}
          keyExtractor={listing => listing.title}
          renderItem={({ item }) => 
            <Card
              title={item.title}
              subTitle={item.price}
              image={item.image}
            />
          }
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
  },
  listArea: {
    padding: 20,
    paddingTop: 100
  }
})

export default ListingsScreen;