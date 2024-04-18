import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import ErrorMessage from '../components/ErrorMessage'
import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        { ({ handleSubmit }) => (
          <>
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
            <AppButton title='Login' onPress={handleSubmit}/>
          </>
        ) }
      </Formik>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  },
})