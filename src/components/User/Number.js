import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import { useStore } from '../../hooks/useStore'

const Number = () => {
  const { points, triggerAnimation } = useStore()
  const [num, setNum] = useState(points)
  const interval = useRef(null)
 
  useEffect(() => {
    if (points !== num) {
      const act = points > num ? 'inc' : 'dec'      
      if (interval.current) {
        clearInterval(interval.current)
      }

      interval.current = setInterval(() => {
        setNum(num => {
          if (num === points) {
            clearInterval(interval.current)
            return num
          }
          
          return act === 'inc' ? num + 1 : num - 1
        })
      }, 15)
    }

    return () => clearInterval(interval.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setNum(points), [])
  
  return (
    <motion.span
      animate={triggerAnimation ? { scale: 1.7 } : { scale : 1 }}
      initial={{ scale: 1 }}
      transition={{ duration: .5 }}
      className='bocado z-50 items-center justify-center inline-flex text-black w-8 h-8 rounded-full'
    >
      {num} <span style={{ fontSize: '9px' }}>punts</span>
    </motion.span>
  )
}

export default Number
