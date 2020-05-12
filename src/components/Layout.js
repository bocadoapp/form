import React, { useEffect, useCallback } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

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

    if (step === 1 || !lsUser) {
      return history.push(`/${locale}/1`)
    }
  }, [history, locale, step, lsUser, setUser])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleMount(), [step])

  return (
    <DndProvider backend={Backend}>
      <div className='wrapper'>
        <Header />
        <Form className='flex flex-col px-4 md:px-auto lg:flex-row w-full lg:max-w-screen-md lg:max-w-screen-lg m-auto leading-relaxed'>
          <Sidebar />
          {children}
        </Form>
      </div>
    </DndProvider>
  )
}

export default Layout