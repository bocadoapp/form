import React, { useRef, useCallback } from 'react'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

function Actions ({ isEdit, handleClick, setEditIndex }) {
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
          Cancel.lar
        </Button>
        <Button
          type='button'
          className='items-center mb-auto rounded-l'
          styled='success'
          onClick={handleClick}
          size='sm'
          style={{ width: '6rem' }}
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
    >
      <i className="fas fa-plus mr-3" />
      {t({ id: btnMsg })}
    </Button> 
  )
}

function CrearEditarPas ({ passos, push, replace, editIndex, setEditIndex }) {
  const { formatMessage: t } = useIntl()
  const ref = useRef(null)
  const isEdit = !(editIndex === null)

  const handleClick = useCallback(e => {
    if (ref.current.value === '') {
      // TOAST NOTIFICATION validation here
      return
    }

    const pas = { text: ref.current.value }    

    if (!isEdit) {
      push(pas)
    } else {
      replace(editIndex, pas)
    }
    setEditIndex(null)
    ref.current.value = ''
  }, [ref, editIndex, setEditIndex, push, replace, isEdit])

  return (
    <div className='flex flex-col w-full bg-gray-100 px-4 py-2 rounded mb-4'>
      <h3 className='text-3xl capitalize'>
        {t({ id: 'pas' })} {isEdit ? editIndex + 1 : passos.length + 1}
      </h3>
      <div className="flex justify-between my-4">
        <div className='flex flex-col'>
          <Button
            type='button'
            className='w-32 items-center'
            styled='default'
            size='sm'
          >
            <i className="far fa-images mr-3" />
            {t({ id: 'upload_photo' })}
          </Button>
          <span className="text-xs text-gray-400 text-center capitalize">
            {t({ id: 'opcional' })}
          </span>
        </div>

        <Actions isEdit={isEdit} handleClick={handleClick} setEditIndex={setEditIndex} />
      </div>
      <div className='w-full flex'>
        <textarea
          ref={ref}
          className='w-full border border-gray-300 rounded p-3 my-3 h-64 text-gray-700'
          placeholder={t({ id: 'pas_ph' })}
          defaultValue={isEdit ? passos[editIndex].text : ''}
        />
      </div>   
    </div>
  )
}

export default CrearEditarPas
