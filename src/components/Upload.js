import { useCallback, useState, useEffect } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useDropzone } from 'react-dropzone'

const UPLOAD_FILE = gql`
  mutation Upload($files: [Upload!]!) {
    upload(files: $files) {
      _id
      url
      path
    }
  }
`

const Upload = ({ children, beforeUpload, afterUpload }) => {
  const [previews, setPreviews] = useState([]) 
  const [upload, { loading }] = useMutation(UPLOAD_FILE)

  const onDrop = useCallback(acceptedFiles => {
    if (beforeUpload && typeof beforeUpload === 'function') {
      beforeUpload({ files: acceptedFiles, previews, setPreviews })
    }

    upload({ variables: { files: acceptedFiles } })
      .then(response => {
        if (afterUpload && typeof afterUpload === 'function') {
          afterUpload(response)
        }
      })
  }, [previews, setPreviews, upload, beforeUpload, afterUpload])

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' })  

  useEffect(() => () => previews.forEach(file => URL.revokeObjectURL(file.preview)), [previews])  

  return children({
    previews,
    setPreviews,
    getRootProps,
    getInputProps,
    loading
  })
}

export default Upload