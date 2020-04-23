import React from 'react'
import Step from '../components/steps/Step'
import Arrows from '../components/steps/Arrows'

const withStep = Component => props => (
  <Step>
    <Component {...props} />
    <Arrows />
  </Step>
)

export default withStep