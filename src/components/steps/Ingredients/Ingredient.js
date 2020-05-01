import React, { useState, useRef, useCallback } from 'react'

import Input from './Input'
import { Button } from '@bocado/ui'

function Ingredient (props) {
  const { push, toggle } = props
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState(null)
  const refs = {
    qty: useRef(null),
    unit: useRef(null),
    name: useRef(null)
  }

  const handleClick = useCallback(e => {
    console.log('handleClick', inputValue, selected);
    const fragment = {
      qty: refs.qty.current.value,
      unit: refs.unit.current.selectedOptions[0].value,
    }
    const ingredient = selected
      ? { ...selected, ...fragment }
      : { type: 'custom', label: inputValue, value: inputValue, ...fragment }
    
    push(ingredient)
    toggle(false)
  }, [inputValue, selected])

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full flex border border-gray-300 rounded text-gray-600 my-4'>
        <div className='w-32 flex items-center border-r border-gray-300'>
          {/* <i className="fas fa-balance-scale-right" /> */}
          <input ref={refs.qty} type="number" className='p-3 w-full border-0' placeholder='Quantitat' min='0' />
        </div>
        <div className='w-24 flex items-center border-r border-gray-300'>
          <select className='h-full w-full' ref={refs.unit}>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
          </select>
        </div>        
        <div className='w-full flex items-center px-2'>
          <Input
            setValue={setInputValue}
            setSelected={setSelected}
          />
        </div>
      </div>
      <Button type='button' className='w-full' styled='success' onClick={handleClick}>
        Afegir
      </Button>      
    </div>
  )
}

export default Ingredient