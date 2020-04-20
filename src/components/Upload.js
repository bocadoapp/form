import React, { useCallback } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useDropzone } from 'react-dropzone'

const UPLOAD_FILE = gql`
  mutation Upload($file: Upload) {
    upload(file: $file) {
      _id
    }
  }
`

const Upload = () => {
  const [upload, { data }] = useMutation(UPLOAD_FILE)
  const onDrop = useCallback(async acceptedFiles => {
    upload({ variables: { file: acceptedFiles[0] } })
  }, [upload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop})  
  console.log('render upload', data);
  
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default Upload