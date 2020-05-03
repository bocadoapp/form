import React, { memo } from 'react'

import Header from './Header'
import Form from './Form'

const Layout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <Form>
        {children}
      </Form>
    </div>
  )
}

export default memo(Layout)