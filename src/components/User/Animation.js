import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { useStore } from '../../hooks/useStore'
import Emojis from './Emojis'

const Animation = () => {
  const { toggleAnimation, triggerAnimation } = useStore()
  const duration = .5
  
  return (
    <div className='absolute z-0'>
      <div className="relative">
        <AnimatePresence 
          initial={false}
          onExitComplete={() => toggleAnimation(false)}
        >
          {!triggerAnimation && <Emojis key='emo' duration={duration} />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Animation
