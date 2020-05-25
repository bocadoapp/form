import React, { useCallback } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useDropzone } from 'react-dropzone'
import { useIntl } from 'react-intl'

const UPLOAD_FILE = gql`
  mutation Upload($file: Upload) {
    upload(file: $file) {
      _id
    }
  }
`

const Upload = ({ images, setImages }) => {
  const { formatMessage: t } = useIntl()
  const [upload, { data }] = useMutation(UPLOAD_FILE)
  const onDrop = useCallback(acceptedFiles => {
    setImages([
      ...images,
      ...acceptedFiles.map(file =>({ ...file, preview: URL.createObjectURL(file) }))
    ])
    upload({ variables: { file: acceptedFiles[0] } })    
  }, [images, setImages, upload])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' })

  return (
    <>
      {!!images && !!images.length && (
        <div className="flex my-3 w-full overflow-x-hidden max-w-full">
          <div className="flex overflow-x-scroll">
            {images.map(file => (
              <div key={file.name || file.path} className='pic mr-3 flex-shrink-0'>
                <div
                  className='pic-inner w-full'
                  style={{
                    backgroundImage: `url(${file.preview})`,
                    backgroundSize: 'cover'
                  }} />
              </div>
            ))}
          </div>
        </div>   
      )}
      <div {...getRootProps()} className='flex flex-col w-full items-center border-4 border-gray-200 border-dashed rounded overflow-hidden'>
        <input {...getInputProps()} />
        <p className='text-center'>
          <i className="far fa-images mr-3 text-3xl" /><br />
          {t({ id: 'upload_text' })}
        </p>      
      </div>         
    </>
  )
}

export default Upload