import React from 'react'
import { Formik } from 'formik'

const AppForm = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      resetForm
    >
      { () => (
        <>
          {children}
        </>
      )}
    </Formik>
  )
}

export default AppForm