import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import Button from '../components/AppButton';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import AppText from '../components/AppText';

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, [])

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);

    setError(false);
    return setListings(response.data);
  }
  
  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Couldn't retrieve the listings.</AppText>
        <Button title="Retry" onPress={loadListings} />
      </>}
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => 
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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