import React, { useState, useCallback, useRef } from 'react'
import { FieldArray } from 'formik'
import { Button } from '@bocado/ui'

import withAnimation from '../../hoc/withAnimation'


function AddIngredient ({ toggle, push }) {
  const refs = {
    qty: useRef(null),
    unit: useRef(null),
    name: useRef(null)
  }

  const handleClick = useCallback(e => {
    // e.preventDefault && e.preventDefault()
    const ingredient = {
      qty: refs.qty.current.value,
      unit: refs.unit.current.selectedOptions[0].value,
      name: refs.name.current.value
    }
    console.log('hola?', ingredient);
    
    push(ingredient)
    toggle(false)
  }, [push, toggle, refs.name, refs.unit, refs.qty])

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full flex border border-gray-300 rounded text-gray-600 my-4'>
        <div className='w-32 flex items-center border-r border-gray-300'>
          {/* <i className="fas fa-balance-scale-right" /> */}
          <input ref={refs.qty} type="number" className='p-3 w-full border-0' placeholder='Quantitat' />
        </div>
        <div className='w-24 flex items-center border-r border-gray-300'>
          <select className='h-full w-full' ref={refs.unit}>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
          </select>
        </div>        
        <div className='w-full flex items-center px-2'>
          <i className="fas fa-tag" />
          <input type="text" className='p-3 border-0' placeholder='Ingredient' ref={refs.name} />
        </div>
      </div>
      <Button type='button' className='w-full' styled='success' onClick={handleClick}>
        Afegir
      </Button>      
    </div>
  )
}

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
                  // disabled={showAdd}
                  className='border border-gray-300 bg-gray-100 text-gray-600 mr-2'
                  onClick={handleClick}
                >
                  Nou ingredient
                </button>                
                <Button className='ml-2' disabled={values.ingredients.length === 0}>
                  Fet!
                </Button>
              </div>
              {showAdd && <AddIngredient toggle={toggleShowAdd} push={push} />}
              {values.ingredients.map(({ name, qty, unit }, i) => {
                return (
                  <div key={`ing-${i}`} className='flex items-center justify-between py-2 my-2 border-b border-gray-200 text-gray-500'>
                     <span>
                      {qty}{unit} <span className='text-gray-700'>{name}</span>
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