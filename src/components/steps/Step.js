import React from 'react'
import { motion } from 'framer-motion'

export default function Step ({ children }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-full md:max-w-screen-md lg:max-w-screen-lg m-auto h-screen'
    >
      {children}
    </motion.div>
  )
}