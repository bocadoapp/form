import React, { useCallback } from 'react'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'
// import { useFormikContext } from 'formik'

import { useStore } from '../hooks/useStore'
import steps from '../lib/steps'
import { getUserFromLS } from '../lib/helpers'
import Avatar from './Avatar'



const Sidebar = () => {
  // const { values } = useFormikContext()
  const { step, btn } = useStore()
  const history = useHistory()
  const { locale } = useIntl()
  const lsUser = getUserFromLS()
  const goToNext = useCallback(() => history.push(`/${locale}/${step + 1}`), [locale, step, history])
  const goTo = useCallback(
    stepParam => history.push(`/${locale}/${stepParam || (step + 1)}`),
    [history, locale, step]
  )

  return (
    <aside className='w-full lg:max-w-xs flex md:mr-10'>
      <div className='w-full'>
        <div className='flex w-full flex lg:flex-col'>
          {steps.map(({ name, icon, num }) => (
            <div
              key={`step-${num}`}
              className={cn(
                'flex w-full items-center md:px-3 py-4 justify-center lg:justify-start',
                step === num ? 'text-gray-700' : 'text-gray-400',
                step === num && 'lg:shadow-md lg:rounded-lg',
                step !== num && num !== 1 && 'cursor-pointer'
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

        {step > 1 && (
          <div className='absolute bottom-0 left-0 right-0 md:relative flex flex-col md:mt-8 mb-6 md:mb-auto px-4 md:px-auto'>
            <span className='text-xs text-gray-400 m-auto'>SEGÜENT PAS</span>
            <Button
              disabled={btn.disabled}
              styled={btn.styled}
              className='items-center'
              onClick={goToNext}
            >
              {btn.icon && btn.icon !== '' ? <i className={cn('mr-3', btn.icon)} /> : null}
              {btn.label}
            </Button>
            {btn.disabled && btn.disabledMessage ? <span className='text-xs text-gray-400 m-auto'>{btn.disabledMessage}</span> : null}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;