import React, { useCallback } from 'react'
import { useStore } from '../hooks/useStore'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'
import cn from 'classnames'

const NextStep = ({ className }) => {
  const { locale, formatMessage: t } = useIntl()
  const { step, btn } = useStore()
  const history = useHistory()
  const goToNext = useCallback(() => history.push(`/${locale}/${step + 1}`), [locale, step, history])

  if (step === 1 || !btn) {
    return null
  }
  return (
    <div className={cn(className, 'relative flex flex-col md:mt-8 mb-6 md:mb-auto px-4 md:px-auto')}>
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
  )
}

export default NextStep
