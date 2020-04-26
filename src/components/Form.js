import React from 'react'
import { Formik, Form as FormikForm } from 'formik'

const initialValues = {
  user: {
    name: '',
    email: ''
  },
  name: 'test',
  diners: '',
  time: '',
  cooking_time: '',
  cuisine: '',
  ingredients: [],
  steps: [],
  pics: [],
  videos: [],
  picsPerStep: []
}

const Form = ({ children }) => {
  function handleOnSubmit (values) {
    console.log('values', values)
  }

  function handleValidate () {

  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      validate={handleValidate}
    >
      {({ values, errors }) => (
        <FormikForm>
          {children}
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form;