import { StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const registrationSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={obj => console.log(obj)}
        validationSchema={registrationSchema}
      >
        <AppFormField
          name='name'
          autoCorrect={false}
          icon='account'
          placeholder='Name'
          textContentType='name'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Register' />
      </AppForm>
    </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})