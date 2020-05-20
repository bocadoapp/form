import React, { useCallback, useState, useEffect } from 'react'
import { Field, useFormikContext } from 'formik'
import { useDropzone } from 'react-dropzone'
import { useMutation, gql } from '@apollo/client'
import { useIntl } from 'react-intl'

import CookingTime from './CookingTime'
import withAnimation from '../../../hoc/withAnimation'
import { useStore } from '../../../hooks/useStore'

const UPLOAD_FILE = gql`
  mutation Upload($file: Upload) {
    upload(file: $file) {
      _id
    }
  }
`

const General = () => {
  const { points, setPoints, btn, setBtn } = useStore()
  const { values } = useFormikContext()
  const { formatMessage: t } = useIntl()
  const [images, setImages] = useState([])
  const [upload] = useMutation(UPLOAD_FILE)
  const onDrop = useCallback(acceptedFiles => {
    setImages([
      ...images,
      ...acceptedFiles.map(file =>({ ...file, preview: URL.createObjectURL(file) }))
    ])
    upload({ variables: { file: acceptedFiles[0] } })    
  }, [images, setImages, upload])
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' })

  useEffect(() => images.forEach(file => URL.revokeObjectURL(file.preview)), [images])  

  useEffect(() => {
    if (values.name && values.name !== '' && btn.disabled) {
      setPoints(points + 5)
      setBtn({ disabled: false })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.name])

  return (
    <div className='w-full text-gray-600 step-general'>
      <Field
        type='text'
        name='name'
        placeholder={t({ id: 'recepta_nom_ph' })}
        className='input text-3xl mb-8'
      />

      <div className='flex items-center mb-5 w-full border border-gray-300 rounded overflow-hidden'>
        <div className="w-8 text-center">
          <i className="fas fa-users" />
        </div>
        <Field
          type='number'
          name='diners'
          placeholder={t({ id: 'recepta_comencals_ph' })}
          className='w-full p-2'
        />
      </div>

      <div className='flex mb-5 w-full border border-gray-300 rounded overflow-hidden py-2'>
        <div className="w-8 text-center">
          <i className="fas fa-stopwatch" />
        </div>
        <Field name='cooking_time' component={CookingTime} />
      </div>      

      <div {...getRootProps()} className='flex flex-col w-full items-center border-4 border-gray-200 border-dashed rounded overflow-hidden'>
        <input {...getInputProps()} />
        <p className='text-center'>
          <i className="far fa-images mr-3 text-3xl" /><br />
          {t({ id: 'upload_text' })}
        </p>

        <div className="flex my-3">
          {images.map(file => (
            <div key={file.name || file.path} className='pic'>
              <div className='pic-inner'>
                <img src={file.preview} alt='recipie preview' />
              </div>
            </div>
          ))}
        </div>        
      </div>
    </div>
  )
}

export default withAnimation()(General)