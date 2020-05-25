import React, { useState, useEffect } from 'react'
import { Field, useFormikContext } from 'formik'
import { useIntl } from 'react-intl'

import Upload from '../../Upload'
import CookingTime from './CookingTime'
import withAnimation from '../../../hoc/withAnimation'
import { useStore } from '../../../hooks/useStore'

const General = () => {
  const { points, setPoints, btn, setBtn } = useStore()
  const { values } = useFormikContext()
  const { formatMessage: t } = useIntl()
  const [images, setImages] = useState([])

  useEffect(() => () => images.forEach(file => URL.revokeObjectURL(file.preview)), [images])  

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

      <Upload images={images} setImages={setImages} />
    </div>
  )
}

export default withAnimation()(General)