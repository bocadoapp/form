import React, { useEffect, useCallback } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'

import Sidebar from './Sidebar'
import Header from './Header'
import Form from './Form'
import { useStore } from '../hooks/useStore'
import { getUserFromLS } from '../lib/helpers'

const Layout = ({ children }) => {
  const { setUser, step } = useStore()
  const history = useHistory()
  const { locale } = useIntl()
  const lsUser = getUserFromLS()


  const handleMount = useCallback(() => {
    if(lsUser) {
      return setUser(lsUser)
    }

    if (step === 1) {
      return history.push(`/${locale}/1`)
    }
  }, [history, locale, step, lsUser, setUser])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleMount(), [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='flex flex-col md:flex-row w-full lg:max-w-screen-md lg:max-w-screen-lg m-auto leading-relaxed'>
        <Sidebar />
        <Form>
          {children}
        </Form>
      </div>
    </div>
  )
}

export default Layout