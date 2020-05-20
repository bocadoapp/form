import React from 'react'
import { Button } from '@bocado/ui'
import { useIntl } from 'react-intl'

import { ReactComponent as Cooker } from '../../images/cooker.svg'
import withAnimation from '../../hoc/withAnimation'

const Final = () => {
  const { formatMessage: t } = useIntl()
  return (
    <div className='w-full text-gray-600 step-final text-center'>
      <h1 className='text-3xl'>{t({ id: 'thanks' })} <span role='img' aria-label='confetti'>🎉</span></h1>
      
      <p>{t({ id: 'thanks1' })}</p>
      <p>{t({ id: 'thanks2' })}</p>

      <div className="flex m-auto w-full max-w-xs">
        <Cooker />
      </div>

      <Button styled='gradient' className='w-64 m-auto'>
        {t({ id: 'new_recipie' })}
      </Button>
    </div>
  )
}

export default withAnimation()(Final)