import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

const AppFormPicker = ({ name, items, ...otherProps }) => {
  const { setFieldValue, errors, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={errors[name]} />
    </>
  )
}

export default AppFormPicker
