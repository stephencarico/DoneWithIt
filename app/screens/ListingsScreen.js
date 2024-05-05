import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'

import Button from '../components/AppButton';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import AppText from '../components/AppText';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, [])
  
  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Couldn't retrieve the listings.</AppText>
        <Button title="Retry" onPress={loadListings} />
      </>}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => 
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
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