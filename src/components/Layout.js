import React from 'react'
import Header from './Header'
import Form from './Form'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Form>
        {children}
      </Form>
    </div>
  )
}

export default Layout