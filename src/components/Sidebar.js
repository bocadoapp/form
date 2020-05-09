import React, { useCallback } from 'react'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

import { useStore } from '../hooks/useStore'
import steps from '../lib/steps'
import { getUserFromLS } from '../lib/helpers'
import User from './User'

const StepInfo = ({ icon, name }) => {
  if (!icon) {
    return <User />
  }

  return (
    <>
      <span className='mr-3'>
        <i className={icon} />
      </span>
      <div className="flex w-full justify-between">
        <span className='hidden md:inline'>
          {name}
        </span>
      </div>
    </>
  )
}

const Sidebar = () => {
  // const { values } = useFormikContext()
  const { step, btn } = useStore()
  const history = useHistory()
  const { locale, formatMessage: t } = useIntl()
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
          {steps.map(({ name, icon, num }) => {
            const isFirstStep = num === 1
            const isSameStep = step === num

            return (
              <div
                key={`step-${num}`}
                className={cn(
                  'flex w-full items-center md:px-3 py-4 justify-center lg:justify-start',
                  isSameStep ? 'text-gray-700' : 'text-gray-400',
                  isSameStep && 'lg:shadow-md lg:rounded-lg',
                  !isSameStep && !isFirstStep && 'cursor-pointer'
                )}
                onClick={() => !isFirstStep && !isSameStep && goTo(num)}
              >
                {isFirstStep && lsUser
                  ? <User name={lsUser.username || lsUser.name} />
                  : <StepInfo icon={icon} name={t({ id: name })} />
                }
              </div>
            )
          })}
        </div>

        {step > 1 && btn && (
          <div className='absolute bottom-0 left-0 right-0 md:relative flex flex-col md:mt-8 mb-6 md:mb-auto px-4 md:px-auto'>
            <span className='text-xs text-gray-400 m-auto uppercase'>
              {t({ id: 'seguent' })}
            </span>
            <Button
              disabled={btn.disabled}
              styled={btn.styled}
              className='items-center'
              onClick={goToNext}
            >
              {btn.icon && btn.icon !== '' ? <i className={cn('mr-3', btn.icon)} /> : null}
              {t({ id: btn.label })}
            </Button>
            {btn.disabled && !!btn.disabledMessage && (
              <span className='text-xs text-gray-400 m-auto'>
                {t({ id: btn.disabledMessage })}
              </span>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;