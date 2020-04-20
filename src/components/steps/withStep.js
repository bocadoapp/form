import React from 'react'
import Step from './Step'

export default function withStep (Component) {
  return function (props) {
    return (
      <Step>
        <Component {...props} />
      </Step>
    )
  }
}