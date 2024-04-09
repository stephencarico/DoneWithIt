import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require('../assets/jacket.jpg')} style={styles.headerImage} />
      <View style={styles.body}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.subTitle}>$100</Text>
        <View style={styles.profile}>
          <Image source={require('../assets/mosh.jpg')} style={styles.avatar} />
          <View>
            <Text>Mosh Hamedani</Text>
            <Text style={styles.profileListingsText}>5 Listings</Text>
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
  body: {
    gap: 10,
    padding: 15
  },
  headerImage: {
    height: 300,
    width: '100%',
    resizeMode: 'cover'
  },
  profile: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 25
  },
  profileListingsText: {
    fontWeight: '200'
  },
  subTitle: {
    color: colors.secondary
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold',
  }
})

export default ListingDetailsScreen