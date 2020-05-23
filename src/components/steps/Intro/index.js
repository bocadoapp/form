import React, { useState, useEffect, useCallback } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { AnimatePresence } from 'framer-motion'

import { Register, Login } from '../../Auth'
import { useStore } from '../../../hooks/useStore'
import withAnimation from '../../../hoc/withAnimation'
import Content from './Content'

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
  const [showRegister, toggleShowRegister] = useState(true)
  const [token, setToken] = useState(null)
  const history = useHistory()
  const { user, setUser } = useStore()
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
    history.push(`/${locale}/2`)
  }, [history, setUser, locale])

  const toggleShowRegisterPerf = useCallback(() => toggleShowRegister(!showRegister), [showRegister])

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
        <Content />
        <div className='flex flex-col w-full md:w-1/2 md:ml-5 px-8 md:px-0'>
          <AnimatePresence exitBeforeEnter>
            {showRegister
              ? <Register
                  loading={loading}
                  handleOnlogin={handleOnlogin}
                  key='showRegister'
                  toggleShowRegister={toggleShowRegisterPerf}
                />
              : <Login
                  key='showLogin'
                  toggleShowRegister={toggleShowRegisterPerf}
                  loading={loading}
                  handleOnlogin={handleOnlogin}                  
                />
            }
          </AnimatePresence>
        </div>             
      </div>
    </div>
  )
}

export default withAnimation()(Intro)