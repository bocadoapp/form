import React from 'react'
import { motion } from 'framer-motion'

import Arrows from '../Arrows'

export default function Step ({ children }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
      <Arrows />      
    </motion.div>
  )
}