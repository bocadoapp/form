import React, { useContext, createContext } from 'react'
import gtm from 'react-gtm-module'

const { NODE_ENV: ENV } = process.env
const Context = createContext()
const isProd = ENV === 'production'

if (isProd) {
  gtm.initialize({ gtmId: 'GTM-N73DWWT' })
}

export const Provider = ({ children }) =>
  isProd
    ? (
      <Context.Provider value={gtm}>
        {children}
      </Context.Provider>
    )
    : children

export const useGtm = () => useContext(Context)