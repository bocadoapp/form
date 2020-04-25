import React, { useCallback } from 'react'
import { Field } from 'formik'
import { useHistory } from 'react-router-dom'

import { Button } from '@bocado/ui'
import withAnimation from '../../hoc/withAnimation'
import { useStore } from '../../hooks/useStore'
import{ useIntl } from 'react-intl'

const User = () => {
  const history = useHistory()
  const { locale } = useIntl()
  const { setStep } = useStore()
  const handleOnclick = useCallback(e => {
    e.preventDefault()
    setStep(3)
    history.push(`/${locale}/step/3`)
  }, [history, locale])

  return (
    <div className='w-full text-gray-600'>
      {/* <div>
        <Field type='text' name='user.name' placeholder='Nom' />
        <Field type='email' name='user.email' placeholder='E-mail' />
      </div> */}

      <Field type='text' name='name' placeholder='Nom de la recepta' className='text-3xl mb-8' />

      <div className='flex items-center mb-5'>
        <div className="w-10 mr-5 text-center">
          <i className="fas fa-users" />
        </div>
        <Field type='number' name='diners' placeholder='Numero de començals' />
      </div>

      <div className='flex items-center mb-5'>
        <div className="w-10 mr-5 text-center">
          <i className="fas fa-stopwatch" />
        </div>
        <Field type='number' min='5' step='5' name='cooking_time' placeholder='Temps cocció' />
      </div>      

      <div className='flex items-center mb-5'>
        <div className="w-10 mr-5 text-center">
          <i className="fas fa-tag" />
        </div>      
        <Field name='cuisine'>
          {({ field }) => (
            <select {...field} className='w-full h-10'>
              <option>Tipus de cuina</option>
              <option>Mediterrànea</option>
              <option>Asiàtica</option>
            </select>
          )}
        </Field>          
      </div>

      <Button handleOnclick={handleOnclick} className='shadow-full mt-8 items-center text-orange-100' size='sm'>
        <i className="fas fa-hamburger mr-3" />
        Afegir ingredients!
      </Button>         
    </div>
  )
}

export default withAnimation(User)