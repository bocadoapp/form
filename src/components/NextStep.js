import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'
import cn from 'classnames'
import { useStore } from '../hooks/useStore'

const NextStep = ({ className }) => {
  const { values } = useFormikContext()
  const [disabled, updateDisabled] = useState(true)
  const { locale, formatMessage: t } = useIntl()
  const { step, btn } = useStore()
  const history = useHistory()
  const goToNext = useCallback(() => history.push(`/${locale}/${step + 1}`), [locale, step, history])

  useEffect(() => {
    if (step === 2) {
      updateDisabled(!(values.name && values.name !== ''))
    } else if (step === 3) {
      updateDisabled(!(values.ingredients && values.ingredients.length))
    } else if (step === 4) {
      updateDisabled(!(values.passos && values.passos.length))
    }
  }, [step, updateDisabled, values.name, values.ingredients, values.passos])

  if (step === 1 || !btn) {
    return null
  }

  return (
    <div className={cn(className, 'relative flex flex-col md:mt-8 mb-6 md:mb-auto px-4 md:px-auto')}>
      <span className='text-xs text-gray-400 m-auto uppercase'>
        {t({ id: 'seguent' })}
      </span>
      <Button
        disabled={disabled}
        styled={btn.styled}
        className='items-center'
        onClick={goToNext}
      >
        {btn.icon && btn.icon !== '' ? <i className={cn('mr-3', btn.icon)} /> : null}
        {t({ id: btn.label })}
      </Button>
      {disabled && !!btn.disabledMessage && (
        <span className='text-xs text-gray-400 m-auto'>
          {t({ id: btn.disabledMessage })}
        </span>
      )}
    </div>
  )
}

export default NextStep
