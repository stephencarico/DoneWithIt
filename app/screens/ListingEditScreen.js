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
  { label: 'Furniture', icon: 'floor-lamp', backgroundColor: '#fc5c65', value: 1 },
  { label: 'Cars', icon: 'car', backgroundColor: '#fd9644', value: 2 },
  { label: 'Cameras', icon: 'camera', backgroundColor: '#fed330', value: 3 },
  { label: 'Games', icon: 'cards', backgroundColor: '#26de81', value: 4 },
  { label: 'Clothing', icon: 'shoe-heel', backgroundColor: '#2bcbba', value: 5 },
  { label: 'Sports', icon: 'basketball', backgroundColor: '#45aaf2', value: 6 },
  { label: 'Movies & Music', icon: 'headphones', backgroundColor: '#4b7bec', value: 7 },
  { label: 'Books', icon: 'book-open-blank-variant', backgroundColor: '#9B66E2', value: 8 },
  { label: 'Other', icon: 'window-maximize', backgroundColor: '#7C8CA1', value: 9 },
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
          width='30%'
        />
        <AppFormPicker
          items={categories}
          name='category'
          placeholder='Category'
          width='50%'
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