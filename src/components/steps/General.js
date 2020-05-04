import React, { useCallback, useState, useEffect } from 'react'
import { Field } from 'formik'
import { useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { useMutation, gql } from '@apollo/client'

import { Button } from '@bocado/ui'
import withAnimation from '../../hoc/withAnimation'
import{ useIntl } from 'react-intl'

const UPLOAD_FILE = gql`
  mutation Upload($file: Upload) {
    upload(file: $file) {
      _id
    }
  }
`

const General = () => {
  const [images, setImages] = useState([])
  const [upload] = useMutation(UPLOAD_FILE)
  const history = useHistory()
  const { locale } = useIntl()
  const onDrop = useCallback(acceptedFiles => {
    setImages([
      ...images,
      ...acceptedFiles.map(file =>({ ...file, preview: URL.createObjectURL(file) }))
    ])
    upload({ variables: { file: acceptedFiles[0] } })    
  }, [images, setImages, upload])
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' })
  const handleOnclick = useCallback(e => {
    e.preventDefault()
    history.push(`/${locale}/3`)
  }, [history, locale])

  useEffect(() => () => {
    images.forEach(file => URL.revokeObjectURL(file.preview));
  }, [images])  

  return (
    <div className='w-full text-gray-600 step-general'>
      {/* <div>
        <Field type='text' name='user.name' placeholder='Nom' />
        <Field type='email' name='user.email' placeholder='E-mail' />
      </div> */}

      <Field type='text' name='name' placeholder='Nom de la recepta' className='input text-3xl mb-8' />

      <div className='flex items-center mb-5 w-full border border-gray-300 rounded overflow-hidden'>
        <div className="w-10 mr-5 text-center">
          <i className="fas fa-users" />
        </div>
        <Field
          type='number'
          name='diners'
          placeholder='Numero de començals'
          className='w-full p-2'
        />
      </div>

      <div className='flex items-center mb-5 w-full border border-gray-300 rounded overflow-hidden'>
        <div className="w-10 mr-5 text-center">
          <i className="fas fa-stopwatch" />
        </div>
        <Field
          className='w-full p-2'
          type='number'
          min='5'
          step='5'
          name='cooking_time'
          placeholder='Temps cocció'
        />
        <span className='text-xs p-2'>minuts</span>
      </div>      

      <div className='flex items-center mb-5 w-full border border-gray-300 rounded overflow-hidden'>
        <div className="w-10 mr-5 text-center">
          <i className="fas fa-tag" />
        </div>      
        <Field name='cuisine'>
          {({ field }) => (
            <select {...field} className='w-full h-10 bg-white'>
              <option>Tipus de cuina</option>
              <option>Mediterrànea</option>
              <option>Asiàtica</option>
            </select>
          )}
        </Field>          
      </div>

      <div className='flex items-center mb-5'>
        <div className="w-10 mr-5 text-center">
          <i className="far fa-images" />
        </div>
        <div className='flex'>
          <div className='flex w-full items-center mr-3'>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <button type='button' className='bg-gray-100 border border-gray-300'>
                <span role='img' aria-label='camera'>📸</span> Puja fotos!
              </button>
            </div>        
          </div>

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

      <div className="w-full md:max-w-xs md:m-auto rounded-full">
        <Button
          styled='gradient'
          onClick={handleOnclick}
          className='shadow-full mt-8 items-center text-orange-100' 
        >
          <i className="fas fa-hamburger mr-3" />
          Afegir ingredients!
        </Button>        
      </div>
    </div>
  )
}

export default withAnimation()(General)