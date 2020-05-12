import React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import cn from 'classnames'

const initialValues = {
  user: {
    name: '',
    email: ''
  },
  name: '',
  diners: '',
  time: '',
  cooking_time: '',
  // cuisine: '',
  ingredients: [],
  passos: [{text: 'pas1'}, {text:'pas2'}],
  pics: [],
  videos: [],
  picsPerStep: []
}

const Form = ({ children, className }) => {
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
      {() => (
        <FormikForm className={cn('w-full', className)}>
          {children}
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form;