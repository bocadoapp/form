import React, { useEffect } from 'react'
import { FieldArray, useFormikContext } from 'formik'

import withAnimation from '../../../hoc/withAnimation'
import { useStore } from '../../../hooks/useStore'
import CrearPas from './CrearPas'
import Pas from './Pas'

const Passos = () => {
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
              <CrearPas passos={values.passos} push={utils.push} />
              {values.passos.map((pas, index) => (
                <Pas
                  key={`step-${index}`}
                  id={`step-${index}`}
                  index={index}
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