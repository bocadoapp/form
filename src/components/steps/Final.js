import React from 'react'
import { Button } from '@bocado/ui'

import { ReactComponent as Cooker } from '../../images/cooker.svg'
import withAnimation from '../../hoc/withAnimation'

const Final = () => {
  return (
    <div className='w-full text-gray-600 step-final text-center'>
      <h1 className='text-3xl'>Moltes gràcies! <span role='img' aria-label='confetti'>🎉</span></h1>
      
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>

      <div className="flex m-auto w-full max-w-xs">
        <Cooker />
      </div>

      <Button styled='gradient' className='w-64 m-auto'>
        Nova recepta
      </Button>      
    </div>
  )
}

export default withAnimation()(Final)