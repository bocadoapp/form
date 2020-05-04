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
        <div className="menu hidden md:flex w-full justify-center ml-auto mr-auto">
        </div>
        <div className="hidden md:flex md:max-w-xs justfy-end">
        </div>
    </nav>
  )

export default Navbar