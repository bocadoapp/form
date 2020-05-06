import React, { useCallback, useMemo } from 'react'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

import { useStore } from '../hooks/useStore'
import steps from '../lib/steps'
import { getUserFromLS } from '../lib/helpers'
import Avatar from './Avatar'

const Sidebar = () => {
  const { step } = useStore()
  const history = useHistory()
  const { locale } = useIntl()
  const lsUser = getUserFromLS()

  const goTo = useCallback(
    stepParam => history.push(`/${locale}/${stepParam || (step + 1)}`),
    [history, locale, step]
  )

  const btn = useMemo(() => {
    switch(step) {
      case 1:
        return { styled: 'gradient', label: 'Informació', icon: 'fas fa-info-circle' }
      case 2:
        return { styled: 'gradient', label: 'Ingredients', icon: 'fas fa-carrot' }
      case 3:
        return { styled: 'gradient', label: 'Passos', icon: 'fas fa-list-ol' }
      case 4:
        return { styled: 'success', label: 'Guardar', icon: 'far fa-save'}
      default:
        return { styled: 'error', label: 'Not found', icon: 'fas fa-exclamation-triangle' }
    }
  }, [step])

  return (
    <aside className='w-full lg:max-w-xs flex md:mr-10'>
      <div className='w-full flex lg:flex-col'>
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

        <div className='mt-8'>
          <span className='text-xs text-gray-400'>SEGÜENT PAS</span>
          <Button styled={btn.styled} className='items-center' onClick={goTo}>
            <i className={cn('mr-3', btn.icon)} />            
            {btn.label}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;