import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = () => (
  <nav className='flex sticky top-0 md:flex-row justify-start items-center w-full py-3 px-6 md:px-20 lg:px-32 mb-10 md:mb-10'>
      <div className="flex justify-end md:justify-start">
        <Link to="/" >
          <figure>
            <img src={logo} alt="Bocado" style={{ maxWidth: '150px' }} />
          </figure>
        </Link>
      </div>             
      <div className="menu flex w-full justify-center ml-auto mr-auto">
        <a href='https://blog.bocadoapp.com' target='_blank' rel='noreferrer noopener'>
          Blog
        </a>
      </div>         
      <div className="hidden md:flex pt-4 md:max-w-xs justfy-end">
        social
        {/* <div className='border border-gray-300 rounded-lg overflow-hidden text-xs flex'>
          <input value={mail} className='p-3 w-full' type='email' name='EMAIL' placeholder='Tu e-mail' onChange={e => setMail(e.target.value)} />
          <button className='p-3 rounded-l-lg w-full flex justify-center' disabled={loading} onClick={handleOnSubmit}>
            {btnMsg}
          </button>
        </div>
        <p className='text-xs text-gray-400 text-right mt-2'>Sin spam, ni nada raro, prometido 🙏</p> */}
      </div>
  </nav>
)

export default Navbar