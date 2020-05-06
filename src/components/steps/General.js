import React, { useCallback, useState, useEffect } from 'react'
import { Field } from 'formik'
import { useDropzone } from 'react-dropzone'
import { useMutation, gql } from '@apollo/client'

import withAnimation from '../../hoc/withAnimation'

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
  const onDrop = useCallback(acceptedFiles => {
    setImages([
      ...images,
      ...acceptedFiles.map(file =>({ ...file, preview: URL.createObjectURL(file) }))
    ])
    upload({ variables: { file: acceptedFiles[0] } })    
  }, [images, setImages, upload])
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' })

  useEffect(() => () => images.forEach(file => URL.revokeObjectURL(file.preview)), [images])  

  return (
    <div className='w-full text-gray-600 step-general'>
      <Field type='text' name='name' placeholder='Nom de la recepta' className='input text-3xl mb-8' />

      <div className='flex items-center mb-5 w-full border border-gray-300 rounded overflow-hidden'>
        <div className="w-8 text-center">
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
        <div className="w-8 text-center">
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
        <div className="w-8 text-center">
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

      <div {...getRootProps()} className='flex flex-col w-full items-center border-4 border-gray-200 border-dashed rounded overflow-hidden'>
        <input {...getInputProps()} />
        <p className='text-center'>
          <i className="far fa-images mr-3 text-3xl" /><br />
          Arrastra imatges aqui, o be fes click
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