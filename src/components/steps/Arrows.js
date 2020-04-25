import React, { useCallback } from 'react'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useStore } from '../../hooks/useStore'

const Arrow = ({ className, type }) => {
  const history = useHistory()
  const { step, setStep } = useStore()
  const { locale } =  useIntl()
  const handleOnclick = useCallback(() => {
    const nextStep = type === 'prev' ? Number(step) - 1 : Number(step) + 1    
    setStep(nextStep)
    history.push(`/${locale}/step/${nextStep}`)
  }, [step, type, history, locale])
  
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