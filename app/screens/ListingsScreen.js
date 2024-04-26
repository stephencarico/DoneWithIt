import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale!',
    price: '100',
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: '100',
    image: require('../assets/couch.jpg')
  },
];

function ListingsScreen() {
  const navigation = useNavigation();

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => 
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigation.navigate('ListingDetails')}
          />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
})

export default ListingsScreen;