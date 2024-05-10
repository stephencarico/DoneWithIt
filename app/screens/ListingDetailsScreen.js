import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { Image } from 'react-native-expo-image-cache'

import AppText from '../components/AppText'
import ListItem from '../components/lists/ListItem'
import ContactSellerForm from '../components/ContactSellerForm'

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <View>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnail }}
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require('../assets/mosh.jpg')}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    height: 300,
    width: '100%',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40
  }
})

export default ListingDetailsScreen