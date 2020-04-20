import React from 'react'
import { Field } from 'formik'

import withStep from './withStep'

const User = () => {
  return (
    <div>
      <div>
        <Field type='text' name='user.name' placeholder='Nom' />
        <Field type='email' name='user.email' placeholder='E-mail' />
      </div>

      <h2>Recepta</h2>

      <Field type='text' name='name' placeholder='Nom de la recepta' />
      <Field type='number' name='diners' placeholder='Començals' />
      <Field type='number' min='5' step='5' name='cooking_time' placeholder='Temps cocció' />

      <Field name='cuisine'>
        {({ field }) => (
          <select {...field}>
            <option>Tipus de cuina</option>
            <option>Mediterrànea</option>
            <option>Asiàtica</option>
          </select>
        )}
      </Field>

    </div>
  )
}

export default withStep(User)