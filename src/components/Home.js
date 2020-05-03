import React, { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'

import { getUserFromLS } from '../lib/helpers'
import { useStore } from '../hooks/useStore'

export default () => {
  const { locale } = useIntl()
  const { setStep } = useStore()
  const step = !!getUserFromLS() ? 2 : 1
  const url = `/${locale}/${step}`

  useEffect(() => setStep(step), [step, setStep])

  return (
    <motion.div exit="undefined">
      <Redirect to={url} />
    </motion.div>
  )
}