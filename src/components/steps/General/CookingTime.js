import React, { useCallback } from 'react'
import { Radio } from '@bocado/ui'
import cn from 'classnames'

const TIMES = {
  1: '-15\'',
  2: '15-30\'',
  3: '30-45\'',
  4: '45-60\'',
  5: '+60\'',
}

const labelBaseClassnames = 'cursor-pointer flex justify-start md:justify-center mb-3 md:mb-auto items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200'

const CookingTime = ({ form: { setFieldValue, values } }) => {
  const handleOnChange = useCallback(e => setFieldValue('cooking_time', Number(e.target.dataset.index)), [setFieldValue])
  
  return (
    <div className='w-full'>
      <p className='mt-0'>Temps de cocció</p>
      <div className='flex flex-col md:flex-row w-full md:w-auto justify-center'>
        {Object.keys(TIMES).map(index => (
          <label
            key={`time-${index}`}
            className={cn(labelBaseClassnames, index < 5 && 'mr-4')}
          >
            <Radio
              name='inner_cooking_time'
              checked={values.cooking_time === Number(index)}
              onChange={handleOnChange}
              data-index={index}
            />
            <span className='ml-2'>{TIMES[index]}</span>
          </label>
        ))}                                  
      </div>
    </div>
  )
}

export default CookingTime;