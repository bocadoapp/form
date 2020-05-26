import React, { useCallback, useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { Button } from '@bocado/ui'

import Upload from '../../Upload'
import Actions from './CrearEditarPasActions'
import { useStore } from '../../../hooks/useStore'

const defaultValues = { text: '', media: [] }

function CrearEditarPas ({ passos, push, replace, editIndex, setEditIndex }) {
  const { setPoints } = useStore()
  const { formatMessage: t } = useIntl()
  const isEdit = !(editIndex === null)
  const text = isEdit ? passos[editIndex].text : ''
  const [pas, updatePas] = useState({ ...defaultValues, text })

  const handleClick = useCallback(e => {
    if (pas.text === '') {
      // TOAST NOTIFICATION validation here
      return
    }

    if (!isEdit) {
      push(pas)
    } else {
      replace(editIndex, pas)
    }

    setEditIndex(null)
    updatePas(defaultValues)
  }, [pas, editIndex, setEditIndex, push, replace, isEdit])

  const beforeUpload = useCallback(({ files }) => {
    setPoints(files.length * 150)
  }, [setPoints])

  const afterUpload = useCallback((response) => {
    updatePas({ ...pas, media: [...pas.media, ...response.data.upload]})
  }, [pas])

  useEffect(() => {
    if (isEdit) {
      updatePas({ ...passos[editIndex] })
    }
  }, [editIndex, isEdit, passos])

  return (
    <div className='flex flex-col w-full bg-gray-100 px-4 py-2 rounded mb-4'>
      <h3 className='text-3xl capitalize'>
        {t({ id: 'pas' })} {isEdit ? editIndex + 1 : passos.length + 1}
      </h3>
      <div className="flex justify-between my-4">
          <Upload afterUpload={afterUpload} beforeUpload={beforeUpload}>
            {({
              loading,
              getRootProps,
              getInputProps              
            }) => (
              <>
                <div className='flex flex-col'>
                  <div {...getRootProps()}>
                    <Button
                      type='button'
                      className='w-32 items-center'
                      styled='default'
                      size='sm'
                      loading={loading}
                      disabled={loading}
                    >
                      <input {...getInputProps()} />
                      <i className="far fa-images mr-3" />
                      {t({ id: 'upload_photo' })}
                    </Button>
                  </div>
                  <span className="text-xs text-gray-400 text-center capitalize">
                    {t({ id: 'opcional' })}
                  </span>              
                </div>
                <Actions isEdit={isEdit} handleClick={handleClick} setEditIndex={setEditIndex} {...pas} loading={loading} />
              </>
            )}
          </Upload>

      </div>

      {!!pas.media.length && (
        <div className='w-full flex'>
          {pas.media.map(m => (
            <div
              key={m.name || m.path}
              className='inline-flex rounded-md border border-gray-300 w-20 h-20 box-border overflow-hidden mr-3 flex-shrink-0'
            >
              <div
                className='flex min-w-0 w-full relative justify-center items-center'
                style={{
                  backgroundImage: `url(${m.url})`,
                  backgroundSize: 'cover'
                }} />
            </div>
          ))}
        </div>
      )}

      <div className='w-full flex'>
        <textarea
          className='w-full border border-gray-300 rounded p-3 my-3 h-64 text-gray-700'
          placeholder={t({ id: 'pas_ph' })}
          value={pas.text}
          onChange={e => updatePas({ ...pas, text: e.target.value })}
        />
      </div>   
    </div>
  )
}

export default CrearEditarPas
