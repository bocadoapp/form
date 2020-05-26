import React, { useState, useRef } from 'react'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'
import { useMutation, gql } from '@apollo/client'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'

import { useStore } from '../../hooks/useStore'
import { useCallback } from 'react'
import { getErrorMessage } from '../../lib/helpers'
import { parseYupErrors, refsValuesToObject, loginSchema } from '../../lib/validate'
import Wrapper from './Wrapper'
import Social from './Social'

const LOGIN_USER_MUTATION = gql`
  mutation ($password: String!, $mail: String!) {
    login(password: $password, mail: $mail) {
      name
      mail
      username
      pic
    }
  }
`

const Login = ({ loading, handleOnlogin, toggleShowRegister }) => {
  const history = useHistory()
  const { setUser, setStatus } = useStore()
  const [errors, updateErrors] = useState({})
  const refs = { mail: useRef(null), password: useRef(null) }
  const { locale, formatMessage: t } = useIntl()
  const [loginUser, { loading: loadingMutation }] = useMutation(LOGIN_USER_MUTATION)
  const handleOnClick = useCallback(async e => {
    e.preventDefault()
    const values = refsValuesToObject(refs)

    try {
      await loginSchema.validate(values, { abortEarly: false })
      setStatus({ error: false, text: null })
      updateErrors({})
      loginUser({ variables: { password: values.password, mail: values.mail }})
        .then(
          response => {            
            setUser(response.data.login)
            setStatus({ error: false, text: `${response.data.login.name} logged in!` })
            history.push(`/${locale}/2`)
          },
          err => setStatus({ error: true, text: getErrorMessage(err) })
        ) 
    } catch (errs) {
      const [msgs, keys] = parseYupErrors(errs)
      updateErrors(keys)
      setStatus({ error: true, text: msgs.join('<br />') })
    }
  }, [loginUser, refs, setStatus, history, locale, setUser])

  return (
    <Wrapper>
      <div className='flex flex-col justify-center bg-gray-100 p-3 rounded-lg shadow-xl'>
        <div className='mb-3'>
          <input ref={refs.mail} className={cn('input', errors.mail && 'error')} type="email" placeholder='E-mail'/>
        </div>
        <div className='mb-3'>
          <input ref={refs.password} className={cn('input', errors.password && 'error')} type="password" placeholder='Password'/>
        </div>
        <Button
          onClick={handleOnClick}
          loading={loadingMutation}
          className='border bg-gray-300 hover:bg-gray-400 text-gray-500'>
          {t({ id: 'login' })}
        </Button>
        <p className='cursor-pointer m-0 mx-auto mt-3 text-xs text-gray-400' onClick={toggleShowRegister}>
          {t({ id: 'login_registre' })}
        </p>
      </div>

      <p className='text-xs text-gray-400 text-center'>o bé entra amb</p>

      <div className='flex'>
        <Social loading={loading} handleOnlogin={handleOnlogin} />      
      </div>      
    </Wrapper>
  )
}

export default Login