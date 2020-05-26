import React, { useEffect } from 'react'
import { FieldArray } from 'formik'
import { useFormikContext } from 'formik'

import Ingredient from './Ingredient'
import withAnimation from '../../../hoc/withAnimation'
import { useStore } from '../../../hooks/useStore'

const Ingredients = () => {
  const { values: { ingredients } } = useFormikContext()
  const { setPoints, setBtn } = useStore()

  useEffect(() => {    
    if (ingredients.length) {
      return setBtn({
        label: 'Passos',
        icon: 'fas fa-list-ol',
        styled: 'gradient',
        disabled: false
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients.length])
  
  return (
    <div className='w-full'>
      <FieldArray
        name='ingredients'
        render={({ form: { values }, remove, push }) => {
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
                     <i
                      className="far fa-times-circle cursor-pointer"
                      onClick={() => {
                        setPoints(-5, false)
                        remove(i)
                      }}
                    />
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