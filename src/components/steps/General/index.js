import React, { useCallback } from 'react'
import { Field, useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import cn from 'classnames'
import { useMutation, gql } from '@apollo/client'

import Upload from '../../Upload'
import CookingTime from './CookingTime'
import withAnimation from '../../../hoc/withAnimation'
import { useStore } from '../../../hooks/useStore'
import RemoveImage from '../../RemoveImage'

const DELETE_FILE = gql`
  mutation DeleteFile($id: MongoID!) {
    fileRemove(filter: { _id: $id }) {
      recordId
    }
  }
`

const General = () => {
  const { setRecipeNamePoints, recipeNamePoints, setPoints, btn, setBtn } = useStore()
  const { values, setFieldValue } = useFormikContext()
  const { formatMessage: t } = useIntl()
  const [remove] = useMutation(DELETE_FILE)

  const addPoints = useCallback(() => {
    if (!recipeNamePoints && values.name && values.name !== '' && btn.disabled) {
      setRecipeNamePoints(true)
      setPoints(5)
      setBtn({ disabled: false })
    }
  }, [values.name, recipeNamePoints, setPoints, setBtn, setRecipeNamePoints, btn.disabled])

  const beforeUpload = useCallback(({ files, previews, setPreviews }) => {    
    setPoints(files.length * 150)
    setPreviews([
      ...previews,
      ...files.map(file =>({ ...file, preview: URL.createObjectURL(file) }))
    ])    
  }, [setPoints])

  const afterUpload = useCallback(response => {
    setFieldValue('media', [ ...values.media, ...response.data.upload ])    
  }, [setFieldValue, values.media])

  const onRemove = useCallback((index, previews, setPreviews) => {    
    const newPreviews = [...previews]
    newPreviews.splice(index, 1)
    const newMedia = [...values.media]
    const [removed] = newMedia.splice(index, 1)

    setPoints(-150)
    setPreviews(newPreviews)    
    setFieldValue('media', newMedia)
    remove({ variables: { id: removed._id }})
      .then(response => console.log('done', response))
      .catch(err => console.log('err', err))    
  }, [remove, setFieldValue, setPoints, values.media])

  return (
    <div className='w-full text-gray-600 step-general'>
      <Field
        type='text'
        name='name'
        placeholder={t({ id: 'recepta_nom_ph' })}
        className='input text-3xl mb-8'
        onBlur={addPoints}
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
        <Field name='cooking_time' component={CookingTime} />
      </div>      

      <Upload beforeUpload={beforeUpload} afterUpload={afterUpload}>
        {({
          loading,
          previews,
          setPreviews,
          getRootProps,
          getInputProps
        }) => (
          <>
            {!!previews && !!previews.length && (
              <div className="flex my-3 w-full overflow-x-hidden max-w-full">
                <div className="flex overflow-x-scroll">
                  {previews.map((file, i) => {
                    const isLoading = loading && (i + 1 >= previews.length - values.media.length)              
                    return (
                      <div key={file.name || file.path} className={cn('pic mr-3 flex-shrink-0 relative')}>
                        <div
                          className='pic-inner w-full relative justify-center items-center'
                          style={{
                            backgroundImage: `url(${file.preview})`,
                            backgroundSize: 'cover'
                          }}>
                            {isLoading && <div className='absolute w-full h-full opacity-50 bg-white flex items-center justify-center' />}
                            {isLoading && <span className='relative'>...Loading</span>}
                          </div>
                          <RemoveImage onRemove={() => onRemove(i, previews, setPreviews)}  />
                      </div>
                    )
                  })}
                </div>
              </div>   
            )}
            <div {...getRootProps()} className='flex flex-col w-full items-center border-4 border-gray-200 border-dashed rounded overflow-hidden cursor-pointer'>
              <input {...getInputProps()} />
              <p className='text-center'>
                <i className="far fa-images mr-3 text-3xl" /><br />
                {t({ id: 'upload_text' })}
              </p>      
            </div>         
          </>
        )}
      </Upload>
    </div>
  )
}

export default withAnimation()(General)