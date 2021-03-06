import React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import cn from 'classnames'

/**
 * Cooking time
 * 1- <15
 * 2- 15-30
 * 3- 30-45
 * 4- 56-60
 * 5- +60
 */

const initialValues = {
  name: '',
  diners: 4,
  cooking_time: 3,
  ingredients: [],
  passos: [],
  media: []
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
        <FormikForm className={cn('w-full py-8', className)}>
          {children}
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form;