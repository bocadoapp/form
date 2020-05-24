import React, { useRef, useState, useCallback } from 'react'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'
import { useMutation, gql } from '@apollo/client'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'

import { useStore } from '../../hooks/useStore'
import { getErrorMessage } from '../../lib/helpers'
import { parseYupErrors, refsValuesToObject, registerSchema } from '../../lib/validate'
import Wrapper from './Wrapper'
import Social from './Social'

const CREATE_USER_MUTATION = gql`
  mutation ($password: String!, $name: String!, $mail: String!) {
    signup(record:{ password: $password, name: $name, mail: $mail }) {
      record {
        name
        mail
        username
        pic
        points
      }
    }
  }
`

const Register = ({ loading, handleOnlogin, toggleShowRegister }) => {
  const history = useHistory()
  const { setUser, setStatus } = useStore()
  const [errors, updateErrors] = useState({})
  const { locale, formatMessage: t } = useIntl()
  const refs = {
    name: useRef(null),
    mail: useRef(null),
    password: useRef(null),
    passwordRepeat: useRef(null)
  }
  const [createUser, { loading: loadingMutation }] = useMutation(CREATE_USER_MUTATION)
  const handleOnRegister = useCallback(async e => {    
    e.preventDefault()
    const values = refsValuesToObject(refs)
    
    try {
      await registerSchema.validate(values, { abortEarly: false })
      setStatus({ error: false, text: null })
      updateErrors({})      
      createUser({ variables: { name: values.name, mail: values.mail, password: values.password }})
        .then(
          response => {
            setUser(response.data.signup.record)
            setStatus({ error: false, text: `${values.name} registered!` })
            history.push(`/${locale}/2`)
          },
          err => setStatus({ error: true, text: getErrorMessage(err) })
        )      
    } catch (errs) {
      const [msgs, keys] = parseYupErrors(errs)
      updateErrors(keys)
      setStatus({ error: true, text: msgs.join('<br />') })
    }
  }, [refs, createUser, setStatus, history, locale, setUser])
  
  return (
    <Wrapper>
      <div className='flex flex-col justify-center bg-gray-100 p-3 rounded-lg shadow-xl'>
        <div className='mb-3'>
          <input required className={cn('input', errors.name && 'error')} type="text" placeholder='Nom i cognoms' ref={refs.name} />
        </div>
        <div className='mb-3'>
          <input required className={cn('input', errors.mail && 'error')} type="email" placeholder='Correu electrònic' ref={refs.mail} />
        </div>
        <div className='mb-3'>
          <input required className={cn('input', errors.password && 'error')} type="password" placeholder='Contrassenya' ref={refs.password} />
        </div>
        <div className='mb-3'>
          <input required className={cn('input', errors.password && 'error')} type="password" placeholder='Repeteix contrassenya' ref={refs.passwordRepeat} />
        </div>              
        <Button
          onClick={handleOnRegister}
          loading={loadingMutation}
          className='border bg-gray-300 hover:bg-gray-400 text-gray-500'
        >
          {t({ id: 'registre' })}
        </Button>
        <p className='cursor-pointer m-0 mx-auto mt-3 text-xs text-gray-400' onClick={toggleShowRegister}>
          {t({ id: 'registre_login' })}
        </p>
      </div>

      <p className='text-xs text-gray-400 text-center'>o bé registra't amb</p>

      <div className='flex'>
        <Social loading={loading} handleOnlogin={handleOnlogin} />      
      </div>
    </Wrapper>
  )
}

export default Register