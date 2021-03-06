import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Dropdown } from '@bocado/ui'

import { useStore } from '../hooks/useStore'
import { LS_KEY } from '../lib/helpers'

import { ReactComponent as Ca } from '../images/ca.svg'
import { ReactComponent as Es } from '../images/es.svg'
import logo from '../images/logo.png'

const flags = { ca: Ca, es: Es }

const variants = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: {
    display: 'flex',
    opacity: 1,
    y: 10
  }
}

const Flag = ({ locale, className }) => {
  const Icon = flags[locale]

  if (!Icon) {
    return null
  }

  return <Icon className={className || ''} style={{ width: '18px', height: '18px' }} />
}

const Navbar = () => {
  const { user, setUser, locale, setLocale } = useStore()
  const history = useHistory()

  const changeLang = (lang) => {
    setLocale(lang)
    history.push(history.location.pathname.replace(`/${locale}/`, `/${lang}/`))
  }

  const logout = useCallback(() => {
    setUser(null)
    window.localStorage.removeItem(LS_KEY)
    history.push(`/${locale}/1`)
  }, [setUser, history, locale])

  return (
  // px-4 md:px-auto lg:flex-row w-full lg:max-w-screen-md lg:max-w-screen-lg m-auto
    <nav className='flex bg-white sticky top-0 md:flex-row justify-end items-center w-full py-3 px-4 md:px-auto lg:max-w-screen-md lg:max-w-screen-lg m-auto'>
        <div className="flex ml-auto mr-auto">
          <Link to="/" >
            <figure>
              <img src={logo} alt="Bocado" style={{ maxWidth: '150px' }} />
            </figure>
          </Link>
        </div>
        <div className="menu flex justify-center items-center">
          <Dropdown>
            <Dropdown.Trigger>
              <Flag locale={locale} />
            </Dropdown.Trigger>
            <Dropdown.Menu
              variants={variants} 
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <div className="flex text-xs cursor-pointer flex" onClick={() => changeLang('ca')}>
                <Flag locale='ca' className='mb-3 mr-2' /> Català
              </div>
              <div className="flex text-xs cursor-pointer flex" onClick={() => changeLang('es')}>
                <Flag locale='es' className='mr-2' /> Castellano              
              </div>
            </Dropdown.Menu>
          </Dropdown>

          {!!user && (
            <span onClick={logout} className='ml-3 px-3 py-2 text-white rounded-full text-xs bg-red-500 cursor-pointer hover:bg-red-600'>
              <i className="fas fa-sign-out-alt mr-2" />
              Sortir
            </span>
          )}
        </div>
        {/*<div className="hidden md:flex md:max-w-xs justfy-end">
        </div> */}
    </nav>
  )
}

export default Navbar