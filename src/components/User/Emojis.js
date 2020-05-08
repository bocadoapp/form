import React from 'react'
import { motion } from 'framer-motion'

import { emojis, random, r } from '../../lib/helpers'

const variants = {
  invisible: {
    y: 0,
    x: 0,
    opacity: 0,
    display: 'none'
  },
  visible: ({ x, y, duration }) => ({
    opacity: [1, 0],
    y,
    x,
    display: 'flex',
    transition: {
      duration
    }
  })
}

const Emojis = ({ duration }) => {
  return emojis.map(e => {
      const animationProps = {
        ra: random(-90, 90),
        toX: random(0, 100),
        toY: random(0, 100),
        x: random(-50, 50),
        y: random(-100, -150),
        z: r(),
        delay: random(0,1),
        fontSize: random(2, 43)
      }
      
      return (
        <motion.div
          custom={{ ...animationProps, duration }}
          className='absolute'
          initial={'invisible'}
          animate={'invisible'}
          variants={variants}
          key={`emoij-ani-${e}`}
          exit='visible'
          // initial={false}
        >
          <span role='img' aria-label='fruit'>{e}</span>
        </motion.div>
      )
    }
  )
}

export default Emojis
