import React, { useState, useEffect, useCallback } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { AnimatePresence } from 'framer-motion'

import { Register, Login } from '../../Auth'
import { useStore } from '../../../hooks/useStore'
import withAnimation from '../../../hoc/withAnimation'
import Content from './Content'
import { getErrorMessage } from '../../../lib/helpers'

// const GET_FILE = gql`
//   query getFile ($name: String!) {
//     file(filter: { name: $name }) {
//       name,
//       mimetype,
//       data
//     }
//   }
// `

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
  const { user, status, setUser, setStatus } = useStore()
  const { locale } = useIntl()
  const { loading, data } = useQuery(GET_USER_FROM_TOKEN, { skip: token === null, variables: { token }})
  const handleOnlogin = provider => {     
    const url = `${process.env.REACT_APP_API}/auth/${provider}?from=${encodeURIComponent(window.location.href)}&tesT=ok`
    window.location.href = url
  }
  const saveAndGoToStep2 = useCallback(user => {
    if (user) {
      setUser(user)
    }
    history.push(`/${locale}/2`)
  }, [history, setUser, locale])

  const toggleShowRegisterPerf = useCallback(() => toggleShowRegister(!showRegister), [showRegister])
  const qs = new URLSearchParams(history.location.search)
  const tokenQs = qs.get('token')
  const errCode = qs.get('errCode')
  const errMessage = qs.get('errMessage')

  useEffect(() => {
    if (!user && !loading && data) {
      saveAndGoToStep2(data.user)
    } else if (!user && tokenQs) {
      setToken(tokenQs)
    } else if (user) {
      saveAndGoToStep2()
    } else if ((errCode || errMessage) && !status.text) {
      setStatus({
        error: true,
        text: getErrorMessage({ graphQLErrors: [{ message: errMessage, extensions: { exception: { code: errCode, errmsg: errMessage }} }] })
      })
    } else if (status.text) {
      history.replace(history.location.pathname)
    }
  }, [loading, data, saveAndGoToStep2, user, tokenQs, errCode, errMessage, setStatus, status.text, history])

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