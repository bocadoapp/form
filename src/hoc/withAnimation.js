import React from 'react'
import { motion } from 'framer-motion'

import NextStep from '../components/NextStep'
import Arrows from '../components/steps/Arrows'

const withAnimation = ({ arrows = false } = {}) => Component => props => (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className='flex w-full overflow-hidden flex-col'
  >
    <Component {...props} />
    {arrows && <Arrows />}
    <NextStep className='md:hidden' />
  </motion.div>
)

export default withAnimation