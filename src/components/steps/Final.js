import React from 'react'
import withStep from './withStep'

const Final = () => {
  return (
    <div>
      <button type='submit'>
        Enviar
      </button>
    </div>
  )
}

export default withStep(Final)