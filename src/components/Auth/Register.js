import React from 'react'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

import Wrapper from './Wrapper'

const Register = ({ loading, handleOnlogin, toggleShowRegister }) => {
  const { formatMessage: t } = useIntl()

  return (
    <Wrapper>
      <div className='flex flex-col justify-center bg-gray-100 p-3 rounded-lg shadow-xl'>
        <div className='mb-3'>
          <input className='input' type="text" placeholder='Nom i cognoms'/>
        </div>
        <div className='mb-3'>
          <input className='input' type="email" placeholder='Correu electrònic'/>
        </div>
        <button className='border bg-gray-300 hover:bg-gray-400 text-gray-500'>
          {t({ id: 'registre' })}
        </button>
        <p className='cursor-pointer m-0 mx-auto mt-3 text-xs text-gray-400' onClick={toggleShowRegister}>
        {t({ id: 'registre_login' })}
        </p>
      </div>

      <p className='text-xs text-gray-400 text-center'>o bé registra't amb</p>

      <div className='flex'>
        <Button
          loading={loading}
          onClick={() => handleOnlogin('facebook')}
          className='items-center text-gray-100 bg-blue-700 hover:bg-blue-800 rounded-r'
          size='sm'
        >
          <i className="fab fa-facebook mr-3" />
          {t({ id: 'registre_fb' })}
        </Button>
        <Button
          loading={loading}
          onClick={() => handleOnlogin('google')}
          className='items-center text-gray-100 bg-red-600 hover:bg-red-700 rounded-l'
          size='sm'
        >
          <i className="fab fa-google mr-3" />
          {t({ id: 'registre_google' })}
        </Button>        
      </div>
    </Wrapper>
  )
}

export default Register