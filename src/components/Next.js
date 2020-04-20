import React from 'react'

import { useStore } from '../hooks/useStore'

const Next = () => {
  const { step, setStep } = useStore()
  return (
    <div>
      <button onClick={() => setStep(step + 1)}>
        Next
      </button>
    </div>
  )
}

export default Next;