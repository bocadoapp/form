import React, { useCallback, useRef, useEffect } from 'react'
import { FieldArray, useFormikContext } from 'formik'
import { Button } from '@bocado/ui'

import withAnimation from '../../../hoc/withAnimation'
import { useStore } from '../../../hooks/useStore'

const createMarkup = __html => ({ __html })

function AddStep ({ passos, push }) {
  const refs = {
    text: useRef(null),
  }

  const handleClick = useCallback(e => {
    push({ text: refs.text.current.value })
    refs.text.current.value = ''
  }, [push, refs.text])

  return (
    <div className='flex flex-col w-full bg-gray-100 px-4 py-2 rounded mb-4'>
      <h3 className='text-3xl'>
        Pas {passos.length + 1}
      </h3>
      <div className="flex justify-between my-4">
        <div className='flex flex-col'>
          <Button
            type='button'
            className='w-32 items-center'
            styled='default'
            onClick={handleClick}
            size='sm'
          >
            <i className="far fa-images mr-3" />
            Pujar foto
          </Button>
          <span className="text-xs text-gray-400 text-center">Opcional</span>
        </div>
        <Button
          type='button'
          className='w-32 items-center mb-auto'
          styled='success'
          onClick={handleClick}
          size='sm'
        >
          <i className="fas fa-plus mr-3" />
          Afegir
        </Button>
      </div>
      <div className='w-full flex'>
        <textarea
          ref={refs.text}
          className='w-full border border-gray-300 rounded p-3 my-3 h-64 text-gray-700'
          placeholder='Explicació del pas a seguir'
        />
      </div>   
    </div>
  )
}

const Steps = () => {
  const { setBtn } = useStore()
  const { values: { passos } } = useFormikContext()

  useEffect(() => {    
    return setBtn({ disabled: !passos.length })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passos.length])

  return (
    <div className='w-full'>
      <FieldArray
        name='passos'
        render={({ form: { values }, remove, push }) => {          
          return (
            <>
              <AddStep passos={values.passos} push={push} />
              {values.passos.map(({ text }, i) => {
                return (
                  <div key={`step-${i}`} className='flex flex-col py-2 my-2 border-b border-gray-200'>
                    <div className='flex items-center'>
                      <i className="far fa-times-circle cursor-pointer mr-3" onClick={() => remove(i)} />
                      <h3 className='text-3xl'>
                        Pas {i + 1}
                      </h3>
                    </div>
                    <p dangerouslySetInnerHTML={createMarkup(text.replace(/\r?\n/g, '<br />'))} />
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