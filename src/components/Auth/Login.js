import React from 'react'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

import Wrapper from './Wrapper'

const Login = ({ loading, handleOnlogin, toggleShowRegister }) => {
  const { formatMessage: t } = useIntl()

  return (
    <Wrapper>
      <div className='flex flex-col justify-center bg-gray-100 p-3 rounded-lg shadow-xl'>
        <div className='mb-3'>
          <input className='input' type="email" placeholder='E-mail'/>
        </div>
        <div className='mb-3'>
          <input className='input' type="password" placeholder='Password'/>
        </div>
        <button className='border bg-gray-300 hover:bg-gray-400 text-gray-500'>
        {t({ id: 'login' })}
        </button>
        <p className='cursor-pointer m-0 mx-auto mt-3 text-xs text-gray-400' onClick={toggleShowRegister}>
          {t({ id: 'login.registre' })}
        </p>
      </div>

      <div className='flex'>
        <Button
          loading={loading}
          onClick={() => handleOnlogin('facebook')}
          className='mt-8 items-center text-gray-100 bg-blue-700 hover:bg-blue-800 rounded-full'
          size='sm'
        >
          <i className="fab fa-facebook mr-3" />
          {t({ id: 'login.fb' })}
        </Button>
      </div>      
    </Wrapper>
  )
}

export default Login