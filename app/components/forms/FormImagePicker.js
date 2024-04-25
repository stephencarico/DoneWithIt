import React from 'react';
import { useFormikContext } from 'formik'
import { StyleSheet } from 'react-native';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={(newUri) => setFieldValue(name, [...values[name], newUri])}
        onRemoveImage={(newUri) => setFieldValue(name, values[name].filter(uri => uri !== newUri))}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FormImagePicker;