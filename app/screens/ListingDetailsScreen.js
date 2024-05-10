import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { Image } from 'react-native-expo-image-cache'
import * as Yup from 'yup'

import AppText from '../components/AppText'
import ListItem from '../components/lists/ListItem'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object({
  message: Yup.string().required().min(1).label('Message'),
})

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
          <AppForm
            initialValues={{ message: '' }}
            onSubmit={(message) => console.log(message)}
            validationSchema={validationSchema}
          >
            <AppFormField
              maxLength={50}
              name='message'
              placeholder='Message...'
            />
            <SubmitButton title="Contact Seller" />
          </AppForm>
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