import React, { useState, useEffect, useCallback } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import{ FormattedMessage, useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

import { useStore } from '../../hooks/useStore'
import withAnimation from '../../hoc/withAnimation'

// const GET_FILE = gql`
//   query getFile ($name: String!) {
//     file(filter: { name: $name }) {
//       name,
//       mimetype,
//       data
//     }
//   }
// `

const LS_KEY = 'bocado_user'
const GET_USER_FROM_TOKEN = gql`
  query getUser ($token: String!) {
    user (filter: { accessToken: $token }) {
      name,
      mail,
      accessToken,
      pic
    }
  }
`

const Intro = () => {
  const [token, setToken] = useState(null)
  const history = useHistory()
  const { user, setUser, setStep } = useStore()
  const { locale } = useIntl()
  const { loading, data } = useQuery(GET_USER_FROM_TOKEN, { skip: token === null, variables: { token }})
  const handleOnlogin = provider => {
    const url = `${process.env.REACT_APP_API}/auth/${provider}`
    window.location.href = url
  }
  const saveAndGoToStep2 = useCallback(user => {
    if (user) {
      setUser(user)
    }
    setStep(2)
    history.push(`/${locale}/2`)
  }, [history, setStep, setUser, locale])

  useEffect(() => {
    if (!user && !loading && data) {
      localStorage.setItem(LS_KEY, JSON.stringify(data.user))
      saveAndGoToStep2(data.user)
    }
  }, [loading, data, saveAndGoToStep2, user])

  useEffect(() => {
    if (!user) {
      const token = new URLSearchParams(history.location.search).get('token')
      if (token) {
        setToken(token)
      }
    }
  }, [history.location.search, user])

  useEffect(() => {
    if (user) {
      saveAndGoToStep2()
    }
  }, [user, saveAndGoToStep2])

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col w-full md:w-1/2 md:mr-5 px-8 md:px-0'>
          <h1 className='text-4xl'>
            <span role='img' aria-label='hello'>
              👋
            </span>
          </h1>
          <p>
            <FormattedMessage id='intro1' values={{ logo: s => <span className='bocado'>{s}</span> }} />
          </p>
          <p className='text-xs'>
            <FormattedMessage id='intro2' />
          </p>
          <p className='text-xs'>
            <FormattedMessage id='intro3' />
          </p>      
        </div>
        <div className='flex flex-col w-full md:w-1/2 md:ml-5 px-8 md:px-0'>
          <div className='flex flex-col justify-center bg-gray-100 p-3 rounded-lg shadow-xl'>
            <div className='mb-3'>
              <input type="text" placeholder='Nom i cognoms'/>
            </div>
            <div className='mb-3'>
              <input type="email" placeholder='Correu electrònic'/>
            </div>
            <button className='border bg-gray-300 text-gray-500'>
              Registrar-me!
            </button>
          </div>

          <div className='flex'>
            <Button
              loading={loading}
              onClick={() => handleOnlogin('facebook')}
              className='mt-8 items-center text-gray-100 bg-blue-700 rounded-full'
              size='sm'
            >
              <i className="fab fa-facebook mr-3" />
              Registrar-me amb Facebook
            </Button>
            {/* <Button onClick={() => handleOnlogin('instagram')} className='shadow-full mt-8 items-center text-orange-100' size='sm'>
              <i className="fab fa-instagram mr-3" />
              Registrar-me amb Instagram
            </Button> */}
          </div>
        </div>             
      </div>
    </div>
  )
}

export default withAnimation()(Intro)