import React, { useState, useRef, useCallback } from 'react'
import { useIntl } from 'react-intl'

import Input from './Input'
import { Button } from '@bocado/ui'
import { useStore } from '../../../hooks/useStore'

function Ingredient (props) {
  const { push } = props
  const { setStatus } = useStore()
  const { formatMessage: t } = useIntl()
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(null)
  const refs = {
    qty: useRef(null),
    unit: useRef(null),
    name: useRef(null)
  }

  const handleClick = useCallback(e => {        
    const fragment = {
      qty: refs.qty.current.value,
      unit: refs.unit.current.selectedOptions[0].value,
    }
    const ingredient = selected
      ? { ...selected, ...fragment }
      : { type: 'custom', label: value, value, ...fragment }
    
    if (ingredient.label === '' || ingredient.qty === '') {
      return setStatus({ error: true, text: 'ingredient.validation.error' })
    }

    refs.qty.current.value = ''
    push(ingredient)
    setValue('')
    setSelected(null)
  }, [refs.qty, refs.unit, selected, value, push, setStatus])

  return (
    <div className='flex flex-col w-full'>
      <div className="flex flex-col w-full my-4">
        <div className='w-full flex border border-gray-300 rounded text-gray-600 bg-white mb-4'>
          <div className='w-full flex items-center border-r border-gray-300'>
            <input
              ref={refs.qty}
              type="number"
              className='p-3 w-full border-0'
              placeholder={t({ id: 'quantitat' })}
              min='0'
            />
          </div>
          <div className='w-16 flex items-center border-r border-gray-300'>
            <select className='h-full w-full' ref={refs.unit}>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="ml">ml</option>
            </select>
          </div>
        </div>
        <div className='w-full flex border border-gray-300 rounded text-gray-600 bg-white mb-4'>
          <div className='w-full flex items-center px-2'>
            <Input
              setValue={setValue}
              setSelected={setSelected}
              value={value}
            />           
          </div>
        </div>
        <Button
          type='button'
          styled='success m-auto md:ml-0'
          onClick={handleClick}
          style={{ width: '6rem' }}
        >
          {t({ id: 'add' })}
        </Button>
      </div>
    </div>
  )
}

export default Ingredient