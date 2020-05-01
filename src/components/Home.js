import React from 'react'
import { useIntl } from 'react-intl'
import { Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'

import { getUserFromLS } from '../lib/helpers'

export default () => {
  const { locale } = useIntl()
  const step = !!getUserFromLS() ? 2 : 1
  const url = `/${locale}/${step}`
  return (
    <motion.div exit="undefined">
      <Redirect to={url} />
    </motion.div>
  )
}