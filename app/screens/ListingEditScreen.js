import { StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from '../components/forms'

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
]

const validationSchema = Yup.object({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description'),
})

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: ''
        }}
        onSubmit={form => console.log(form)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name='title'
          placeholder='Title'
        />
        <AppFormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
        />
        <AppFormPicker
          items={categories}
          name='category'
          placeholder='Category'
        />
        <AppFormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
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