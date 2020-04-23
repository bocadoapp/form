import React from 'react'
import Arrows from '../components/Arrows'

export default Component => props => (
  <>
    <Component {...props} />
    <Arrows />
  </>
)