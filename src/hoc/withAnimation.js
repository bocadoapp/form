import React from 'react'
import { motion } from 'framer-motion'

import Arrows from '../components/steps/Arrows'

const withAnimation = ({ arrows = false } = {}) => Component => props => (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className='flex w-full md:max-w-screen-md lg:max-w-screen-md m-auto leading-relaxed'
  >
    <Component {...props} />
    {arrows && <Arrows />}
  </motion.div>
)

export default withAnimation