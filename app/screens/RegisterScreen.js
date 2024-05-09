import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'

const registrationSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = () => {
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    setError(null);
    const result = await authApi.register(userInfo);
    if (!result.ok) {
      if (!result.data) setError(result.data.error);
      else {
        setError('An unexpected error occurred.');
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password,
    )
    auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
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
  error: {
    color: 'red',
    fontWeight: '500'
  },
  container: {
    padding: 10
  }
})