import React, { useCallback, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import cn from 'classnames'
import { useIntl } from 'react-intl'

import { useStore } from '../hooks/useStore'
import logo from '../images/logo.png'

const circleClassname = 'flex justify-center items-center rounded-full mx-3 w-8 h-8'
const LS_KEY = 'bocado_user'

const Navbar = () => {
  const { locale } = useIntl()
  const history = useHistory()
  const { setUser, setStep, step } = useStore()
  const goTo = useCallback(step => {
    setStep(step)
    history.push(`/${locale}/${step}`)
  }, [history, locale, setStep])

  useEffect(() => {
    try {
      const lsUser = JSON.parse(localStorage.getItem(LS_KEY))
      if (lsUser) {
        setUser(lsUser)
      }
    } catch (err) {}    
  }, [setUser])

  return (
    <nav className='flex sticky top-0 md:flex-row justify-start items-center w-full py-3 px-6 md:px-20 lg:px-32 mb-10 md:mb-10'>
        <div className="flex justify-end md:justify-start">
          <Link to="/" >
            <figure>
              <img src={logo} alt="Bocado" style={{ maxWidth: '150px' }} />
            </figure>
          </Link>
        </div>             
        <div className="menu hidden md:flex w-full justify-center ml-auto mr-auto">
          <div className='flex justify-center items-center text-xs'>
            <div className={cn(
              circleClassname,
              step === 1 ? 'bg-orange-200' : 'bg-orange-100',
              step === 1 ? 'text-orange-600' : 'text-orange-400'
            )}>
              1
            </div>
            <span className={cn(step === 1 ? 'text-gray-900' : 'text-gray-500')}>
              Intro
            </span>
          </div>

          <div className='cursor-pointer flex justify-center items-center text-xs' onClick={() => step !== 2 && goTo(2)}>
            <div className={cn(
              circleClassname,
              step === 2 ? 'bg-orange-200' : 'bg-orange-100',
              step === 2 ? 'text-orange-600' : 'text-orange-400'
            )}>
              2
            </div>
            <span className={cn(step === 2 ? 'text-gray-900' : 'text-gray-500')}>
              General
            </span>
          </div>

          <div className='cursor-pointer flex justify-center items-center text-xs' onClick={() => step !== 3 && goTo(3)}>
            <div className={cn(
              circleClassname,
              step === 3 ? 'bg-orange-200' : 'bg-orange-100',
              step === 3 ? 'text-orange-600' : 'text-orange-400'
            )}>
              3
            </div>
            <span className={cn(step === 3 ? 'text-gray-900' : 'text-gray-500')}>
              Ingredients
            </span>
          </div>

          <div className='cursor-pointer flex justify-center items-center text-xs' onClick={() => step !== 4 && goTo(4)}>
            <div className={cn(
              circleClassname,
              step === 4 ? 'bg-orange-200' : 'bg-orange-100',
              step === 4 ? 'text-orange-600' : 'text-orange-400'
            )}>
              4
            </div>
            <span className={cn(step === 4 ? 'text-gray-900' : 'text-gray-500')}>
              Passos
            </span>
          </div>                
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
}

export default Navbar