import React, { useCallback, useRef } from 'react'
import { FieldArray } from 'formik'
import { Button } from '@bocado/ui'

import withAnimation from '../../../hoc/withAnimation'

function AddStep ({ push }) {
  const refs = {
    text: useRef(null),
  }

  const handleClick = useCallback(e => {
    const step = {
      text: refs.text.current.value
    }
    push(step)
  }, [push, refs.text])

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full flex'>
        <textarea
          ref={refs.text}
          className='w-full border border-gray-300 rounded p-3 my-3 h-64 text-gray-700'
          placeholder='Explicació del pas a seguir'
        />
      </div>
      <Button type='button' className='w-64 m-auto' styled='success' onClick={handleClick}>
        Afegir
      </Button>      
    </div>
  )
}

const Steps = () => {
  return (
    <div className='w-full'>
      <FieldArray
        name='steps'
        render={({ form: { values }, remove, push }) => {
          return (
            <>
              <div className='flex'>              
                <Button styled='gradient' className='ml-2' disabled={values.steps.length === 0}>
                  Fet!
                </Button>
              </div>
              <AddStep push={push} />
              {values.steps.map(({ text }, i) => {
                return (
                  <div key={`step-${i}`} className='flex items-center justify-between py-2 my-2 border-b border-gray-200 text-gray-500'>
                     <span>
                      <span className='text-gray-700'>{text}</span>
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

export default withAnimation()(Steps)