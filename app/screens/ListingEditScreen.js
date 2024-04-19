import { StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'

const categories = [
  { label: 'Food', value: 1 },
  { label: 'Furniture', value: 2 },
]

const listingSchema = Yup.object({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().label('Category'),
  description: Yup.string().label('Description'),
})

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{  title: '', price: 0, category: null, description: '' }}
        onSubmit={form => console.log(form)}
        validationSchema={listingSchema}
      >
        <AppFormField
          name='title'
          placeholder='Title'
        />
        <AppFormField
          name='price'
          placeholder='Price'
          keyboardType='numeric'
        />
        <AppFormPicker
          name='category'
          items={categories}
          placeholder='Category'
        />
        <AppFormField
          name='description'
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  )
}

export default ListingEditScreen

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})