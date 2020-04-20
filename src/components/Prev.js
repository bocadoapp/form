import React from 'react'

import { useStore } from '../hooks/useStore'

const Prev = () => {
  const { step, setStep } = useStore()
  return (
    <div>
      <button onClick={() => setStep(step - 1)}>
        Prev
      </button>
    </div>
  )
}

export default Prev;