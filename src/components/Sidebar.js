import React, { useCallback } from 'react'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

import { useStore } from '../hooks/useStore'
import steps from '../lib/steps'
import { getUserFromLS } from '../lib/helpers'
import User from './User'
import NextStep from './NextStep'

const StepInfo = ({ icon, name }) => {
  if (!icon) {
    return <User />
  }

  return (
    <>
      <span className='mr-3'>
        <i className={icon} />
      </span>
      <div className="hidden md:flex w-full justify-between">
        <span>
          {name}
        </span>
      </div>
    </>
  )
}

const Sidebar = () => {
  const { step } = useStore()
  const history = useHistory()
  const { locale, formatMessage: t } = useIntl()
  const lsUser = getUserFromLS()
  const goTo = useCallback(    
    stepParam => lsUser && history.push(`/${locale}/${stepParam || (step + 1)}`),
    [history, locale, step, lsUser]
  )

  return (
    <aside className='w-full lg:max-w-xs flex md:mr-10'>
      <div className='w-full'>
        {/* <NextStep className='md:hidden' /> */}

        <div className='flex w-full flex lg:flex-col'>
          {steps.map(({ name, icon, num }) => {
            const isFirstStep = num === 1
            const isSameStep = step === num

            return (
              <div
                key={`step-${num}`}
                className={cn(
                  'flex w-full items-center md:px-3 py-4 justify-center lg:justify-start',
                  isSameStep || isFirstStep ? 'text-gray-700' : 'text-gray-400',
                  isSameStep && 'lg:shadow-md lg:rounded-lg',
                  !isSameStep && !isFirstStep && 'cursor-pointer'
                )}
                onClick={() => !isFirstStep && !isSameStep && goTo(num)}
              >
                {isFirstStep && lsUser
                  ? <User name={lsUser.name || lsUser.username} />
                  : <StepInfo icon={icon} name={t({ id: name })} />
                }
              </div>
            )
          })}
        </div>

        <NextStep className='hidden md:flex'/>
      </div>
    </aside>
  );
};

export default Sidebar