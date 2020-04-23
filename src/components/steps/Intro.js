import React from 'react'
import{ FormattedMessage } from 'react-intl'

import { Button } from 'ui'

import withStep from '../../hoc/withStep'

// const GET_FILE = gql`
//   query getFile ($name: String!) {
//     file(filter: { name: $name }) {
//       name,
//       mimetype,
//       data
//     }
//   }
// `

const Intro = () => {  
  return (
    <div>
      <FormattedMessage id='intro' values={{ pa: str => <p>{str}</p> }} />
      <Button loading />
    </div>
  )
}

export default withStep(Intro)
