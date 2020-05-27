import React from 'react'
import { Button } from '@bocado/ui'
import { useIntl } from 'react-intl'

const Social = ({ loading, handleOnlogin }) => {
  const { formatMessage: t } = useIntl()

  return (
    <>
      <Button
        loading={loading}
        onClick={() => handleOnlogin('facebook')}
        className='items-center text-gray-100 bg-blue-700 hover:bg-blue-800 rounded-r'
        size='sm'
      >
        <i className="fab fa-facebook mr-3" />
        {t({ id: 'registre_fb' })}
      </Button>
      <Button
        loading={loading}
        onClick={() => handleOnlogin('google')}
        className='items-center text-gray-100 bg-red-600 hover:bg-red-700 rounded-l'
        size='sm'
      >
        <i className="fab fa-google mr-3" />
        {t({ id: 'registre_google' })}
      </Button>
    </>
  )
}

export default Social