import React, { useCallback } from 'react'
import { FieldArray } from 'formik'
import { Button } from '@bocado/ui'
import { useHistory } from 'react-router-dom'

import Ingredient from './Ingredient'
import withAnimation from '../../../hoc/withAnimation'
import { useIntl } from 'react-intl'

const Ingredients = () => {
  const history = useHistory()
  const { locale } = useIntl()
  const handleOnclick = useCallback(() => {
    history.push(`/${locale}/4`)
  }, [history, locale])

  return (
    <div className='w-full'>
      <FieldArray
        name='ingredients'
        render={({ form: { values }, remove, push }) => {
          const disabled = values.ingredients.length === 0

          return (
            <>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                <Ingredient push={push} />
              </div>
              
              {values.ingredients.map(({ label, qty, unit }, i) => {
                return (
                  <div key={`ing-${i}`} className='flex items-center justify-between py-2 my-2 border-b border-gray-200 text-gray-500'>
                     <span>
                      {qty}{unit} <span className='text-gray-700'>{label}</span>
                     </span>
                     <i className="far fa-times-circle cursor-pointer" onClick={() => remove(i)} />
                  </div>
                )
              })}
              <div className='w-full md:max-w-xs m-auto mt-12'>
                <Button
                  styled='gradient'
                  className='ml-2'
                  disabled={disabled}
                  onClick={handleOnclick}
                >
                  {disabled ? (
                    <>Una recepta sense ingredients ? <span role='img' aria-label='think'>🤔</span></>
                  ) : (
                    <><span role='img' aria-label='paper'>📝</span> Explica'ns com es fa!</>
                  )}
                </Button>
              </div>
            </>          
          )          
        }}
      />
    </div>
  )
}

export default withAnimation()(Ingredients)