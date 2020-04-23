import React, { useCallback } from 'react'
import cn from 'classnames'
import { useHistory, useParams } from 'react-router-dom'

import { useStore } from '../../hooks/useStore'
// import { createPortal } from 'react-dom'

const Arrow = ({ className, type }) => {
  const history = useHistory()
  const { step, setStep } = useStore()
  
  const handleOnclick = useCallback(() => {
    const nextStep = type === 'prev' ? Number(step) - 1 : Number(step) + 1
    setStep(nextStep)
    history.push(`/step/${nextStep}`)
  }, [step, type, history])
  
  return (
    <div
      onClick={handleOnclick}
      style={{ top: '50%' }}
      className={cn(
        className,
        'absolute text-5xl p-5 text-gray-600 cursor-pointer',
        type === 'prev' ? 'left-0' : 'right-0'
      )}
    >
      {type === 'prev' ? <i className="fas fa-angle-left" /> : <i className="fas fa-angle-right" />}
    </div>
  )
}

const Arrows = () => {
  const { step, numSteps } = useStore()  

  return (
    <>
      {Number(step) > 1 && <Arrow type='prev' />}
      {Number(step) < numSteps && <Arrow type='next' />}
    </>
  )
}

export default Arrows