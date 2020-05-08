import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  show: { opacity: 1 },
  hide: { opacity: 0 }
}

const Wrapper = ({ children }) => (
  <motion.div
    exit={'hide'}
    initial={'hide'}
    animate={'show'}
    variants={variants}
  >
    {children}
  </motion.div>
)

export default Wrapper