import React from 'react'
import Header from './Header'
import Form from './Form'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen min-h-full'>
      <Header />
      <div className='wrapper'>
        <Form>
          {children}
        </Form>
      </div>
    </div>
  )
}

export default Layout