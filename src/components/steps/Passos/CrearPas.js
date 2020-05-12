import React, { useRef, useCallback } from 'react'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

function CrearPas ({ passos, push }) {
  const { formatMessage: t } = useIntl()
  const refs = { text: useRef(null) }
  const handleClick = useCallback(e => {
    if (refs.text.current.value === '') {
      // TOAST NOTIFICATION validation here
      return
    }

    push({ text: refs.text.current.value })
    refs.text.current.value = ''
  }, [push, refs.text])

  return (
    <div className='flex flex-col w-full bg-gray-100 px-4 py-2 rounded mb-4'>
      <h3 className='text-3xl capitalize'>
        {t({ id: 'pas' })} {passos.length + 1}
      </h3>
      <div className="flex justify-between my-4">
        <div className='flex flex-col'>
          <Button
            type='button'
            className='w-32 items-center'
            styled='default'
            onClick={handleClick}
            size='sm'
          >
            <i className="far fa-images mr-3" />
            {t({ id: 'upload_photo' })}
          </Button>
          <span className="text-xs text-gray-400 text-center capitalize">
            {t({ id: 'opcional' })}
          </span>
        </div>
        <Button
          type='button'
          className='items-center mb-auto'
          styled='success'
          onClick={handleClick}
          size='sm'
          style={{ width: '6rem' }}
        >
          <i className="fas fa-plus mr-3" />
          {t({ id: 'add' })}
        </Button>
      </div>
      <div className='w-full flex'>
        <textarea
          ref={refs.text}
          className='w-full border border-gray-300 rounded p-3 my-3 h-64 text-gray-700'
          placeholder={t({ id: 'pas_ph' })}
        />
      </div>   
    </div>
  )
}

export default CrearPas
