import React, { useState, useEffect } from 'react'
import { FieldArray, useFormikContext } from 'formik'

import withAnimation from '../../../hoc/withAnimation'
import { useStore } from '../../../hooks/useStore'
import CrearEditarPas from './CrearEditarPas'
import Pas from './Pas'

const Passos = () => {
  const [editIndex, setEditIndex] = useState(null)
  const { setBtn } = useStore()
  const { values: { passos } } = useFormikContext()

  useEffect(() => {    
    setBtn({ disabled: !passos.length })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passos.length])  

  return (
    <div className='w-full'>
      <FieldArray
        name='passos'
        render={({ form: { values }, ...utils }) => {          
          return (
            <>
              <CrearEditarPas
                passos={values.passos}
                editIndex={editIndex}
                setEditIndex={setEditIndex}
                {...utils}
              />
              {values.passos.map((pas, index) => (
                <Pas
                  key={`step-${index}`}
                  id={`step-${index}`}
                  index={index}
                  setEditIndex={setEditIndex}                  
                  {...pas}
                  {...utils}
                />
              ))}
            </>          
          )          
        }}
      />
    </div>
  )
}

export default withAnimation()(Passos)