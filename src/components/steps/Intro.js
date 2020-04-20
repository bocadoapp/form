import React from 'react'

import withStep from './withStep'

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
      intro
    </div>
  )
}

export default withStep(Intro)
