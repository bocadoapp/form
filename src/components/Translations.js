import React from 'react'
import { IntlProvider } from 'react-intl'

import { useStore } from '../hooks/useStore'
import messages from '../locale'

const Translations = ({ children }) => {
  const { locale } = useStore()  

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  )
}

export default Translations;