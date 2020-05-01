import React, { useState, useCallback } from 'react'
import { FieldArray } from 'formik'
import { Button } from '@bocado/ui'

import Ingredient from './Ingredient'
import withAnimation from '../../../hoc/withAnimation'

const Ingredients = () => {
  const [showAdd, toggleShowAdd] = useState(true)
  const handleClick = useCallback(() => toggleShowAdd(!showAdd), [showAdd, toggleShowAdd])

  return (
    <div className='w-full'>
      <FieldArray
        name='ingredients'
        render={({ form: { values }, remove, push }) => {
          return (
            <>
              <div className='flex'>
                <button
                  type='button'
                  // disabled={showAdd}
                  className='border border-gray-300 bg-gray-100 text-gray-600 mr-2'
                  onClick={handleClick}
                >
                  Nou ingredient
                </button>                
                <Button styled='gradient' className='ml-2' disabled={values.ingredients.length === 0}>
                  Fet!
                </Button>
              </div>
              {showAdd && <Ingredient toggle={toggleShowAdd} push={push} />}
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
            </>          
          )          
        }}
      />
    </div>
  )
}

export default withAnimation()(Ingredients)