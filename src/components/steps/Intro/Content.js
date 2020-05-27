import React from 'react'
import { FormattedMessage } from 'react-intl'

const Content = () => {
  return (
    <div className='flex flex-col w-full md:w-1/2 md:mr-5 px-8 md:px-0'>
      <h1 className='text-4xl'>
        <span role='img' aria-label='hello'>
          👋
        </span>
      </h1>
      <p>
        <FormattedMessage id='intro1' values={{ logo: s => <span className='bocado'>{s}</span> }} />
      </p>
      <p className='text-xs'>
        <FormattedMessage id='intro2' />
      </p>
      <p className='text-xs'>
        <FormattedMessage id='intro3' />
      </p>      
    </div>
  )
}

export default Content;