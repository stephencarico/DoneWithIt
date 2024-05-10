import React from 'react';
import { View, Keyboard, StyleSheet, Alert } from 'react-native';

import { AppForm, AppFormField, SubmitButton } from './forms';
import messagesApi from '../api/messages';

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log('Error', result);
      return Alert.alert('Error', 'Could not send the message');
    }

    resetForm();
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ message: '' }}
        onSubmit={handleSubmit}
      >
        <AppFormField name='message' placeholder='Message...' />
        <SubmitButton title='Contact Seller' />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ContactSellerForm;