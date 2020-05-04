import React, { useCallback } from 'react'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'

import { useStore } from '../hooks/useStore'
import steps from '../lib/steps'
import { getUserFromLS } from '../lib/helpers'
import Avatar from './Avatar'

const Sidebar = () => {
  const { step } = useStore()
  const history = useHistory()
  const { locale } = useIntl()
  const lsUser = getUserFromLS()

  const goTo = useCallback(step => {
    history.push(`/${locale}/${step}`)
  }, [history, locale])

  return (
    <aside className='w-full md:max-w-xs flex md:mr-10'>
      <div className='w-full flex md:flex-col'>
        {steps.map(({ name, icon, num }) => (
          <div
            key={`step-${num}`}
            className={cn(
              'flex w-full items-center md:px-3 py-4 justify-center md:justify-start',
              step === num ? 'text-gray-700' : 'text-gray-400',
              step === num && 'md:shadow-md md:rounded-lg',
              step !== num && num !== 1 && 'md:cursor-pointer'
            )}
            onClick={() => num !== 1 && step !== num && goTo(num)}
          >
            <span className='mr-3'>
              {num === 1 && !!lsUser ? <Avatar /> : <i className={icon} />}
            </span>
            <span className='hidden md:inline'>
              {num === 1 && !!lsUser ? (lsUser.username || lsUser.name) : name}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;