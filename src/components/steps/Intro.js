import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import{ FormattedMessage, useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

import { useStore } from '../../hooks/useStore'
import withAnimation from '../../hoc/withAnimation'

// const GET_FILE = gql`
//   query getFile ($name: String!) {
//     file(filter: { name: $name }) {
//       name,
//       mimetype,
//       data
//     }
//   }
// `

const Intro = () => {
  const history = useHistory()
  const { setStep } = useStore()
  const { locale } = useIntl()
  const handleOnclick = useCallback(e => {
    e.preventDefault()
    setStep(2)
    history.push(`/${locale}/step/2`)
  }, [history, locale, setStep])
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col w-1/2 mr-5'>
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
        <div className='flex flex-col w-1/2 ml-5'>
          <div className='flex flex-col justify-center bg-gray-100 p-3 rounded-lg shadow-xl'>
            <div className='mb-3'>
              <input type="text" placeholder='Nom i cognoms'/>
            </div>
            <div className='mb-3'>
              <input type="email" placeholder='Correu electrònic'/>
            </div>
            <button className='border bg-gray-300 text-gray-500'>
              Registrar-me!
            </button>
          </div>            
          <Button handleOnclick={handleOnclick} className='shadow-full mt-8 items-center text-orange-100' size='sm'>
            <i className="fab fa-instagram mr-3" />
            Registrar-me amb Instagram
          </Button>             
        </div>             
      </div>
    </div>
  )
}

export default withAnimation(Intro)