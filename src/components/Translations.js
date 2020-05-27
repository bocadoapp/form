import React, { useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'

import { useStore } from '../hooks/useStore'
// import messages from '../locale'

const { REACT_APP_API } = process.env

const Translations = ({ children }) => {
  const { locale } = useStore()
  const [messages, setMessages] = useState(null)

  useEffect(() => {
    window.fetch(`${REACT_APP_API}/translations/${locale}`)
      .then(r => r.json())
      .then(setMessages)
  }, [locale])

  // if (!messages) {
  //   return null
  // }

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export default Translations;