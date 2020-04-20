import React, { useCallback } from 'react'
import cn from 'classnames'
import { useParams, useHistory } from 'react-router-dom'

import { useStore } from '../hooks/useStore'

const Arrow = ({ className, type }) => {
  const history = useHistory()
  const { step } = useParams()
  
  const handleOnclick = useCallback(() => {
    const nextStep = type === 'prev' ? Number(step) - 1 : Number(step) + 1
    history.push(`/step/${nextStep}`)
  }, [step, type, history])
  
  return (
    <div
    onClick={handleOnclick}
      className={cn(
        className,
        'absolute top-50 text-5xl p-5 text-gray-600 cursor-pointer',
        type === 'prev' ? 'left-0' : 'right-0'
      )}
    >
      {type === 'prev' ? <i className="fas fa-angle-left" /> : <i className="fas fa-angle-right" />}
    </div>
  )
}

const Arrows = () => {
  const { numSteps } = useStore()
  const { step } = useParams()

  return (
    <>
      {Number(step) > 1 && <Arrow type='prev' />}
      {Number(step) < numSteps && <Arrow type='next' />}
    </>
  )
}

export default Arrows