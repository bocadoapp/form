import React from 'react'
import { Button } from '@bocado/ui'
import { useIntl } from 'react-intl'

function CrearEditarPasActions ({ text, media, loading, isEdit, handleClick, setEditIndex }) {
  const { formatMessage: t } = useIntl()
  const btnMsg = isEdit ? 'edit' : 'add'

  if (isEdit) {
    return (
      <div className="inline-flex">
        <Button
          type='button'
          className='items-center mb-auto rounded-r'
          styled='default'
          size='sm'
          style={{ width: '6rem' }}
          onClick={() => setEditIndex(null)}
        >
          {t({ id: 'cancel' })}
        </Button>
        <Button
          type='button'
          className='items-center mb-auto rounded-l'
          styled='success'
          onClick={handleClick}
          size='sm'
          style={{ width: '6rem' }}
          disabled={loading || text === '' || !text}
        >
          <i className="fas fa-plus mr-3" />
          {t({ id: btnMsg })}
        </Button>          
      </div>
    )
  }

  return (
    <Button
      type='button'
      className='items-center mb-auto'
      styled='success'
      onClick={handleClick}
      size='sm'
      style={{ width: '6rem' }}
      disabled={loading || text === '' || !text}
    >
      <i className="fas fa-plus mr-3" />
      {t({ id: btnMsg })}
    </Button> 
  )
}

export default CrearEditarPasActions
