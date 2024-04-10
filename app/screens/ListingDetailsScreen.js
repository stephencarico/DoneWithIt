import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

import AppText from '../components/AppText'

function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require('../assets/jacket.jpg')} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.profile}>
          <Image source={require('../assets/mosh.jpg')} style={styles.avatar} />
          <View>
            <AppText>Mosh Hamedani</AppText>
            <AppText style={styles.profileListingsText}>5 Listings</AppText>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: '100%'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    height: 300,
    width: '100%',
  },
  profile: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 25
  },
  profileListingsText: {
    fontWeight: '200'
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
  }
})

export default ListingDetailsScreen