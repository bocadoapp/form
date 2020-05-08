import React from 'react'
import { motion } from 'framer-motion'

import Wrapper from './Wrapper'

const Login = ({ toggleShowRegister }) => {
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
          Entrar
        </button>
        <p className='cursor-pointer m-0 mx-auto mt-3 text-xs text-gray-400' onClick={toggleShowRegister}>
          Registrar-me, no tinc compte
        </p>
      </div>
    </Wrapper>
  )
}

export default Login